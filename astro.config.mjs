import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        alpine(),
        tailwind({
            applyBaseStyles: false
        }),
    ],
    site: 'https://guinotix.github.io',
});
