/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00c4cc", // Cyan-ish from the site
                secondary: "#d4a373", // Tan/brownish from the patterns
                dark: "#222222",
                light: "#f8f9fa",
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'pattern-circles': "url('/images/pattern.png')", // Placeholder name, will verify
            }
        },
    },
    plugins: [],
}
