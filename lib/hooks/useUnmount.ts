import { useEffect } from "react";
import { useLatest } from "./useLatest";
import { isDev } from "../utils/isDev";
import { isFunc } from "../utils/isFunc";

export function useUnmount(fn: () => void) {
  if (isDev && !isFunc(fn)) {
    console.error(
      `useUnmount expected parameter is a function, got ${typeof fn}`
    );
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
}
