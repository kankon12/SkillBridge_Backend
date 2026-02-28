import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  clean: true,
  minify: true,
  splitting: false,
  shims: true, // Eti ESM-e __dirname ba require error thik kore dey
  outExtension() {
    return {
      js: '.mjs',
    };
  },
});