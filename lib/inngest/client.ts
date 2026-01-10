import { Inngest } from "inngest";

let client: Inngest | null = null;

/**
 * Safe initializer: allows builds to succeed even if GEMINI_API_KEY is missing.
 */
export const getInngest = (): Inngest => {
  if (client) return client;

  const apiKey = process.env.GEMINI_API_KEY;

  client = new Inngest({
    id: "signalist",
    ...(apiKey ? { ai: { gemini: { apiKey } } } : {}),
  });

  return client;
};

// Back-compat: existing imports expect `inngest`.
export const inngest = getInngest();