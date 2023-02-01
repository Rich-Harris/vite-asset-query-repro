import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		assetsInlineLimit: 0,
		manifest: true,
		rollupOptions: {
			input: 'src/index.js',
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
});
