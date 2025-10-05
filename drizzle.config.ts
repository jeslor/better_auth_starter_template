import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./auth-schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SUPERBASE_DB_URL!,
  },
});
