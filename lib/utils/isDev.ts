/**
 * variable to check if the app is running in development mode or not
 * @returns boolean value
 */
export const isDev =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
