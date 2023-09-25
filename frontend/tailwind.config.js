/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue, js, jsx, ts, tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nonito', 'sans-serif'],
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: false,
        darkTheme: 'light',
        base: true,
        utils: true,
        styled: true,
        rtl: false,
        prefix: '',
        logs: true,
    },
};
