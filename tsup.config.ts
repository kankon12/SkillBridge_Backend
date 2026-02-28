import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  clean: true,
  minify: true,
  splitting: false, // এটি ফলস রাখুন জাতে সব এক ফাইলে থাকে
  shims: true,      // এটি ESM এর জন্য গ্লোবাল ভেরিয়েবল ঠিক করে দেয়
  outExtension() {
    return {
      js: '.mjs',
    };
  },
});