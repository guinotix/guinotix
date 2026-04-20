import { defineConfig, fontProviders } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [
        alpinejs()
    ],
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Reddit Mono",
        cssVariable: "--font-reddit",
        fallbacks: ["monospace"]
    }],
    vite: {
        plugins: [tailwindcss()],
    },
});
