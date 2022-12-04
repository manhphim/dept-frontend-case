/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/modules/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Lato: ['Lato', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
