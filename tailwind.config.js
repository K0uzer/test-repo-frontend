/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'spin-left': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'spin-right': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(-360deg)' },
                },
                typing: {
                    '0%': { content: '"   "' },
                    '33%': { content: '".  "' },
                    '66%': { content: '".. "' },
                    '100%': { content: '"..."' },
                },
                lift: {
                    '0%': {
                        transform: 'translateY(30%)',
                        opacity: '0.7',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
            },
            animation: {
                'typing-fast': 'typing 1s steps(3, end) infinite',
                'lift-slow': 'lift 0.2s linear',
                'spin-left': 'spin-left 1s linear infinite',
                'spin-right': 'spin-right 1s linear infinite',
            },
            colors: {
                primary: '#11253E',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                winter: {
                    ...require('daisyui/src/theming/themes')[
                        '[data-theme=winter]'
                    ],
                    primary: '#11253E',
                },
            },
        ],
    },
}
