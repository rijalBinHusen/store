import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), tailwind({
        config: { path: './tailwind.config.cjs'}
    })],
    vite: {
        resolve: {
            alias: {
                "@/*": ["src/*"],
            }
        }
    },
    site: "http://localhost:3000"
});
