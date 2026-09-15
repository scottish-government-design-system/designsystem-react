import "vitest/config";

import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react-swc";
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = import.meta.dirname

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ["./vitest-setup.ts"],
    coverage: {
      exclude: ["src/images", "**/*.stories.+(tsx|ts)"],
      include: ["src/**"],
      reporter: ["text", "lcov"],
      thresholds: {
        branches: 80,
        lines: -10,
      }
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom'
        },
      },
      {
        extends: true,
        plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
});
