/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
            maxWidth: {
                '7xl': '1536px',
            },
            colors: {
                primary: {
                    DEFAULT: "#D4AF37", // gold-signature
                    50: "#FEFCF3", // gold-50
                    100: "#FDF8E1", // gold-100
                    200: "#FAF0C4", // gold-200
                    300: "#F6E8A6", // gold-300
                    400: "#F0DC88", // gold-400
                    500: "#D4AF37", // gold-500
                    600: "#B8962F", // gold-600
                    700: "#9C7D27", // gold-700
                    800: "#80641F", // gold-800
                    900: "#644B17", // gold-900
                },
                secondary: {
                    DEFAULT: "#8B7355", // brown-sophisticated
                    50: "#F7F5F2", // brown-50
                    100: "#EFEBE5", // brown-100
                    200: "#E0D7CB", // brown-200
                    300: "#D0C3B1", // brown-300
                    400: "#C1AF97", // brown-400
                    500: "#8B7355", // brown-500
                    600: "#7A6449", // brown-600
                    700: "#69553D", // brown-700
                    800: "#584631", // brown-800
                    900: "#473725", // brown-900
                },
                accent: {
                    DEFAULT: "#E8B4B8", // rose-soft
                    50: "#FDF9FA", // rose-50
                    100: "#FBF3F4", // rose-100
                    200: "#F6E7E9", // rose-200
                    300: "#F1DBDE", // rose-300
                    400: "#ECCFD3", // rose-400
                    500: "#E8B4B8", // rose-500
                    600: "#D49DA2", // rose-600
                    700: "#C0868C", // rose-700
                    800: "#AC6F76", // rose-800
                    900: "#985860", // rose-900
                },
                background: "#FFFEF7", // warm-white
                surface: "#F8F6F0", // cream-subtle
                text: {
                    primary: "#2C2C2C", // charcoal-rich
                    secondary: "#6B6B6B", // gray-medium
                },
                success: {
                    DEFAULT: "#7C9885", // sage-muted
                    50: "#F4F7F5", // sage-50
                    100: "#E9EFEB", // sage-100
                    200: "#D3DFD7", // sage-200
                    300: "#BDCFC3", // sage-300
                    400: "#A7BFAF", // sage-400
                    500: "#7C9885", // sage-500
                    600: "#6D8574", // sage-600
                    700: "#5E7263", // sage-700
                    800: "#4F5F52", // sage-800
                    900: "#404C41", // sage-900
                },
                warning: {
                    DEFAULT: "#D4A574", // amber-warm
                    50: "#FDF9F4", // amber-50
                    100: "#FBF3E9", // amber-100
                    200: "#F6E7D3", // amber-200
                    300: "#F1DBBD", // amber-300
                    400: "#ECCFA7", // amber-400
                    500: "#D4A574", // amber-500
                    600: "#BC9265", // amber-600
                    700: "#A47F56", // amber-700
                    800: "#8C6C47", // amber-800
                    900: "#745938", // amber-900
                },
                error: {
                    DEFAULT: "#C4847A", // terracotta-soft
                    50: "#FAF6F5", // terracotta-50
                    100: "#F5EDEB", // terracotta-100
                    200: "#EBDBD7", // terracotta-200
                    300: "#E1C9C3", // terracotta-300
                    400: "#D7B7AF", // terracotta-400
                    500: "#C4847A", // terracotta-500
                    600: "#AF746B", // terracotta-600
                    700: "#9A645C", // terracotta-700
                    800: "#85544D", // terracotta-800
                    900: "#70443E", // terracotta-900
                },
                border: "#E5E5E5", // neutral-border
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                accent: ['Cormorant Garamond', 'serif'],
                playfair: ['Playfair Display', 'serif'],
                inter: ['Inter', 'sans-serif'],
                cormorant: ['Cormorant Garamond', 'serif'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.6rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1.3' }],
                '6xl': ['3.75rem', { lineHeight: '1.3' }],
                '7xl': ['4.5rem', { lineHeight: '1.3' }],
                '8xl': ['6rem', { lineHeight: '1.3' }],
                '9xl': ['8rem', { lineHeight: '1.3' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            boxShadow: {
                'luxury': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'elegant': '0 2px 12px rgba(0, 0, 0, 0.05)',
                'soft': '0 1px 6px rgba(0, 0, 0, 0.04)',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            transitionDuration: {
                '300': '300ms',
            },
            transitionTimingFunction: {
                'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            animation: {
                'fade-in': 'fadeIn 300ms ease-out',
                'slide-up': 'slideUp 300ms ease-out',
                'scale-in': 'scaleIn 300ms ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
