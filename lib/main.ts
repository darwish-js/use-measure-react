/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useRafState } from "./hooks/useRafState";

export default function useMeasure() {
  const ref = useRef<React.ElementRef<any> | null>(null);
  const [states, setStates] = useRafState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0,
  });

  return [ref, states] as const;
}
