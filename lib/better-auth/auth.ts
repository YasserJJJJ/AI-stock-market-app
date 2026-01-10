import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

import { connectToDatabase } from "@/database/mongoose";

type BetterAuthInstance = ReturnType<typeof betterAuth>;

let authPromise: Promise<BetterAuthInstance> | null = null;

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}
export const getAuth = (): Promise<BetterAuthInstance> => {
    if (authPromise) return authPromise;
  
    authPromise = (async () => {
      const mongoose = await connectToDatabase();
      const db = mongoose.connection.db;
  
      if (!db) throw new Error("MongoDB connection not found");
  
      return betterAuth({
        database: mongodbAdapter(db as any),
        secret: requiredEnv("BETTER_AUTH_SECRET"),
        baseURL: requiredEnv("BETTER_AUTH_URL"),
        emailAndPassword: {
          enabled: true,
          disableSignUp: false,
          requireEmailVerification: false,
          minPasswordLength: 8,
          maxPasswordLength: 128,
          autoSignIn: true,
        },
        plugins: [nextCookies()],
      });
    })();
  
    return authPromise;
  };
