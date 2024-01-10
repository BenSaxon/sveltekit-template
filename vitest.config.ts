import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'vitest-setup.ts',
		alias: [
			{
				find: '$lib',
				replacement: resolve(fileURLToPath(dirname(import.meta.url)), './src/lib')
			}
		]
	}
});
