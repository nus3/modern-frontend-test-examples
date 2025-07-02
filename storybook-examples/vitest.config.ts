import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  plugins: [
    // The plugin will run tests for the stories defined in your Storybook config
    // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
    storybookTest({
      configDir: path.join(dirname, ".storybook"),
      storybookScript: "npm run storybook --ci",
    }),
  ],
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: "chromium" }],
      provider: "playwright",
    },
    setupFiles: [".storybook/vitest.setup.ts"],
  },
});
