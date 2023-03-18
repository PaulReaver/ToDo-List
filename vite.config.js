// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'; // Provides intellisense without the need for jsdoc annotations

export default defineConfig({
    base: './', // Specifies base public path when served in development or production
    build: {
        outDir: 'docs', // Specifies the output directory
    },
});
