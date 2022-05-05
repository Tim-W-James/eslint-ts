/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  // https://github.com/vitest-dev/vitest
  plugins: [eslintPlugin(), tsconfigPaths()],
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
  },
})