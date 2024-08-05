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
				blueGray: "#6C90B6",
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
				"light-blue": "#FAFCFF",
			},
			fontFamily: {
				"heading-font": ["Montserrat", "sans-serif"],
				"body-font": ["Inter", "sans-serif"],
			},
			borderWidth: {
				0: "0.5px",
				1: "1px",
			},
			boxShadow: {
				xs: "0 0 2px 1px rgba(0, 0, 0, 0.25)",
				nav: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
				scroll: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
				card: "0px 0px 4px 2px rgba(0, 0, 0, 0.2)",
				project: "inset 0px 0px 6px 3px rgba(0, 0, 0, 0.25)",
				projectcard: "0px 0px 6px 4px rgba(0, 0, 0, 0.5)",
				"certificate-card": "0px 0px 4px 2px rgba(240, 95, 35, 0.5)",
				"header-button": "0px 0px 2px 1px rgba(0, 0, 0, 0.25)",
				"active-header-button":
					"0px 0px 2px 1px rgba(255, 255, 255, 0.15)",
			},
			backgroundImage: {
				"wave-pattern":
					"url('/src/assets/background/wave_pattern.svg')",
				"project-detail-card-pattern-black":
					"url('/src/assets/background/project_details_small_card_black.svg')",
				"project-detail-card-pattern-white":
					"url('/src/assets/background/project_details_small_card_white.svg')",
			},
		},
	},

	plugins: [],
};
