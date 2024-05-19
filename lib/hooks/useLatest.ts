import { useRef } from "react";

/**
 * Get the latest value of a variable
 * @param value The value to be stored in the ref
 * @returns The ref with the latest value
 */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
