import forms from '@tailwindcss/forms';
import defaultTheme, {
    colors as defaultColors,
} from 'tailwindcss/defaultTheme';
import path from "path";


/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        path.join(
            require.resolve("@thaddeusjiang/react-sortable-list"),
            "../**/*.{js,ts,jsx,tsx}"
        )
    ],

    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '6rem',
                xl: '7rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                ...defaultColors,
                ...{
                    primary: '#4A9AF6',
                    accent: '#323232',
                    secondary: '#F4F4F4',
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
