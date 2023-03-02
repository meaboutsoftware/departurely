import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const config: PlaywrightTestConfig = {
  timeout: 10 * 1000,
  use: {
    baseURL: process.env.APPLICATION,
  },
};

export default config;
