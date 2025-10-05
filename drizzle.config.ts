import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./auth-schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SUPABASE_DB_URL!,
  },
});
