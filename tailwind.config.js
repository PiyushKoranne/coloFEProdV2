/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			boxShadow: {
        'inset-bottom': 'inset 0 -14px 6px rgba(0, 0, 0, 0.1)',
      },
		},
  },
  plugins: [],
}

