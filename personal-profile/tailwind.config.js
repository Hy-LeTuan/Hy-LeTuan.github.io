/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1E1F21",
				secondary: "#FFFFFC",
				accent: "#FF7F11",
				pink: "#e52e71",
				neutral: "#272A2E",
				warning: "#F6AE2D",
				alert: "#DA303E",
				success: "#15D599",
				border: {
					secondary: "rgba(255, 255, 255, 0.25)",
					translucent: {
						black: "rgba(0, 0, 0, 0.15)",
						secondary: "rgba(255, 255, 255, 0.25)",
					},
				},
			},
			fontFamily: {
				"heading-font": ["'Anton'", "sans-serif"],
				"body-font": ["'Libre Baskerville'", "sans-serif"],
			},
			borderWidth: {
				0: "0.5px",
				1: "1px",
			},
			boxShadow: {
				xs: "0 0 2px 1px rgba(0, 0, 0, 0.25)",
				nav: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
				scroll: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
				card: "0px 1px 4px 2px rgba(0, 0, 0, 0.25)",
			},
		},
	},

	plugins: [],
};