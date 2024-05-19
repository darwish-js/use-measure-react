import { useCallback, useState, useRef } from "react";
import { useUnmount } from "./useUnmount";

/**
 * @description useRafState is a hook that updates state in requestAnimationFrame
 * @param initialState initial state
 * @returns [state, setState]
 * @example
 * const [state, setState] = useRafState(0);
 * const [state, setState] = useRafState(() => 0);
 */
export const useRafState = <S>(initialState: S | (() => S)) => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);
    frame.current = window.requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    window.cancelAnimationFrame(frame.current);
  });

  return [state, setRafState] as const;
};
