/** @type {import('tailwindcss').Config} */
export default {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'xs': '375px',  // Breakpoint para telas extra pequenas (ex: smartphones)
                'sm': '640px',  // Breakpoint para telas pequenas (ex: tablets)
                'md': '768px',  // Alterando o breakpoint médio
                'lg': '1024px', // Alterando o breakpoint grande
                'xl': '1536px', // Alterando o breakpoint extra grande
            }
        },
    },
        plugins: [],
    };
