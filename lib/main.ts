/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useRafState } from "./hooks/useRafState";

interface UseMeasureOptions {
  scroll?: boolean;
  resize?: boolean;
  hover?: boolean;
}
export default function useMeasure<T extends HTMLElement = any>(
  options?: UseMeasureOptions
) {
  const { scroll = false, resize = true, hover = false } = options || {};
  const movein = useRef(false);
  const ref = useRef(null) as React.MutableRefObject<T | null>;
  const [bounds, setBounds] = useRafState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0,
    scrollX: hover ? 0 : undefined,
    scrollY: hover ? 0 : undefined,
  });

  useEffect(() => {
    if (!ref.current) return;
    if (hover) {
      const cbEnter = () => {
        movein.current = true;
      };
      const cbMove = (event: MouseEvent) => {
        if (movein.current) {
          const rect = ref.current?.getBoundingClientRect();
          if (rect) {
            const x = event.clientX - rect.left; // 鼠标相对于元素左侧的距离
            const y = event.clientY - rect.top; // 鼠标相对于元素顶部的距离
            setBounds((prev) => ({
              ...prev,
              scrollX: x,
              scrollY: y,
            }));
          }
        }
      };
      const cbLeave = () => {
        movein.current = false;
      };
      ref.current.addEventListener("mouseenter", cbEnter);
      ref.current.addEventListener("mousemove", cbMove);
      ref.current.addEventListener("mouseleave", cbLeave);
      return () => {
        ref.current?.removeEventListener("mouseenter", cbEnter);
        ref.current?.removeEventListener("mousemove", cbMove);
        ref.current?.removeEventListener("mouseleave", cbLeave);
      };
    }
  }, [ref.current, hover, scroll, resize]);
  useEffect(() => {
    if (scroll) {
      const cb = () => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          setBounds((prev) => ({
            ...prev,
            width: rect.width,
            height: rect.height,
            left: rect.left,
            top: rect.top,
            bottom: rect.bottom,
            right: rect.right,
            x: rect.x,
            y: rect.y,
          }));
        }
      };
      window.addEventListener("scroll", cb, { capture: true, passive: true });
      return () => {
        window.removeEventListener("scroll", cb);
      };
    }
  }, [ref.current, scroll, resize, hover]);

  useEffect(() => {
    if (!ref.current) return;
    const clientHeight = ref.current.clientHeight;
    const clientWidth = ref.current.clientWidth;
    const offsetTop = ref.current.offsetTop;
    const offsetLeft = ref.current.offsetLeft;
    const offsetHeight = ref.current.offsetHeight;
    const offsetWidth = ref.current.offsetWidth;
    if (resize === false && ref.current) {
      setBounds((prev) => ({
        ...prev,
        height: clientHeight,
        width: clientWidth,
        top: offsetTop,
        left: offsetLeft,
        bottom: offsetTop + offsetHeight,
        right: offsetLeft + offsetWidth,
        x: offsetLeft,
        y: offsetTop,
      }));
    }
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entrie of entries) {
        const target = entrie.target as T;
        setBounds((prev) => ({
          ...prev,
          height: target.clientHeight,
          width: target.clientWidth,
          top: target.offsetTop,
          left: target.offsetLeft,
          bottom: target.offsetTop + target.offsetHeight,
          right: target.offsetLeft + target.offsetWidth,
          x: target.offsetLeft,
          y: target.offsetTop,
        }));
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current, scroll, resize, hover]);

  return [ref, bounds] as const;
}
