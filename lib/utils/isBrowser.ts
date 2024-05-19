/**
 * Check if the code is running in a browser environment.
 */
export const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
