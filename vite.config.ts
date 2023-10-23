import UnoCSS from "unocss/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import manifest from "./manifest.json";

import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		crx({ manifest }),
		UnoCSS({
			extractors: [extractorSvelte()],
			/* more options */
		}),
		,
		svelte(),
	],
});
