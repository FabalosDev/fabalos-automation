// tailwind.config.js — Tailwind v4 compliant
import { typography } from '@tailwindcss/typography';
import { forms } from '@tailwindcss/forms';

export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}', './src/styles/**/*.{css}'],

	theme: {
		// removed color scheme. All colors are now defined in CSS variables for easier theming
	},

	plugins: [typography(), forms()]
};
