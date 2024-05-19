/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyFunc = (...args: any[]) => any;
/**
 * check if a value is a function
 * @param value the value to check
 * @returns true if the value is a function, false otherwise
 */
export const isFunc = (value: unknown): value is AnyFunc =>
  typeof value === "function";
