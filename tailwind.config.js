/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                zinc: {
                    950: '#151515'
                },
                gray: {
                    350: '#D0D0D0',
                    650: '#636363',
                }
            },
            screens: {
                'laptop': '1220px',
                'mobile': '500px'
            },
        },
    },
    plugins: [],
}
