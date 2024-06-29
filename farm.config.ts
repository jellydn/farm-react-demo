import path from "node:path";
import { defineConfig } from "@farmfe/core";
import postcss from "@farmfe/js-plugin-postcss";

export default defineConfig({
	plugins: ["@farmfe/plugin-react", postcss()],
	compilation: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	},
});
