import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
				'sunset': "url('/sunset.jpg')",
                'sailaway': "url('/sailaway/sailaway_banner.webp')"
			},
            fontFamily: {
                sans: ['Reddit Mono Variable', ...defaultTheme.fontFamily.sans]
            },
        },
    },
    plugins: [],
}
