import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},
		},
	},
	plugins: [tailwindcss()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
