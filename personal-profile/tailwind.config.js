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
				"rainbow-pattern":
					"url('./src/assets/background/rainbow_pattern.svg')",
				"stripe-pattern":
					"url('./src/assets/background/stripe_pattern.svg')",
				"stripe-pattern-reverse":
					"url('./src/assets/background/stripe_pattern_reverse.svg')",
				"stripe-pattern-reverse-dark":
					"url('/src/assets/background/stripe_pattern_reverse_dark.svg')",
				"rainbow-pattern-reverse-dark-gray":
					"url('/src/assets/background/rainbow_pattern_reverse_dark_gray.svg')",
				"rainbow-pattern-reverse-light":
					"url('/src/assets/background/rainbow_pattern_reverse_light.svg')",
				"rainbow-pattern-opposite":
					"url('/src/assets/background/rainbow_pattern_matching_opposite.svg')",
				"rainbow-pattern-opposite-total":
					"url('/src/assets/background/rainbow_pattern_matching_opposite_total.svg')",
				"rainbow-pattern-opposite-total-dark":
					"url('/src/assets/background/rainbow_pattern_matching_opposite_total_dark.svg')",
				"floating-circle-pattern":
					"url('/src/assets/background/floating_circle_pattern.svg')",
				"stripe-pattern-white":
					"url('/src/assets/background/stripe_pattern_white.svg')",
			},
		},
	},

	plugins: [],
};
