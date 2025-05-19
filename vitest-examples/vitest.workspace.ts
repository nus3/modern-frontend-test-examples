import { defineWorkspace } from 'vitest/config';


export default defineWorkspace([
  {
    extends: "./vite.config.ts",
    test: {
      name: "node",
      globals: true,
      environment: "jsdom",
      include: ["**/*.node.{test,spec}.{ts,tsx}"],
    },
  },
  {
    extends: "./vite.config.ts",
    test: {
      name: "browser",
      include: ["**/*.browser.{test,spec}.{ts,tsx}"],
      browser: {
        enabled: true,
        instances: [{ browser: "chromium" }],
        provider: "playwright",
      },
    },
  }
]);
