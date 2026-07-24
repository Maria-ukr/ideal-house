export const CONSTANTS = {
  BASE_URL: process.env.NODE_ENV === "production" ? "/ideal-house" : "",
} as const;