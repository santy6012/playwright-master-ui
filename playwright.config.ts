import { defineConfig, devices } from '@playwright/test';
import * as fs from 'fs';

const env = process.env.ENV || 'dev';
const configPath = `./src/config/env.${env}.json`;
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium', // Playwright does not support Edge directly, but Chromium is compatible
    headless: false, //true for headless mode and false for headed mode
    baseURL: config.baseURL,
  },
  projects: [
    {
      name: 'msedge',
      use: {
        channel: 'msedge',
        ...devices['Desktop Edge'],
      },
    },
  ],
});