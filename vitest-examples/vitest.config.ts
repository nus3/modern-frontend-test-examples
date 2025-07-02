import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "node",
          globals: true,
          environment: "jsdom",
          include: ["**/*.node.{test,spec}.{ts,tsx}"],
        },
      },
      {
        test: {
          name: "browser",
          include: ["**/*.browser.{test,spec}.{ts,tsx}"],
          browser: {
            enabled: true,
            instances: [{ browser: "chromium" }],
            provider: "playwright",
          },
        },
      },
    ],
  },
});
