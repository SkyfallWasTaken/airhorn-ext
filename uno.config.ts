import { defineConfig } from "unocss";
import presetWind from "@unocss/preset-wind";
import transformerDirectives from "@unocss/transformer-directives";
import { extendCatppuccin } from "unocss-catppuccin";

export default defineConfig({
	presets: [presetWind(), extendCatppuccin()],
	transformers: [transformerDirectives()],
});
