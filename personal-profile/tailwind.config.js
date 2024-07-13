/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1E1F21",
				secondary: "#FFFFFC",
				accent: "#FF7F11",
				neutral: "#272A2E",
				warning: "#F6AE2D",
				alert: "#DA303E",
				success: "#15D599",
			},
			fontFamily: {
				"heading-font": ["'Anton SC'", "sans-serif"],
				"body-font": ["'Libre Baskerville'", "sans-serif"],
			},
		},
	},

	plugins: [],
};
