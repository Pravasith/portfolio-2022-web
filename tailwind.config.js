module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-theme-background": {
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                },

                "dark-theme-background": {
                    100: "#1f2937",
                    200: "#1a1a1a",
                },

                "icon-background-yellow": {
                    100: "#fcf877",
                },

                "icon-background-orange": {
                    100: "#f9b067",
                    200: "#ed1c24",
                },

                "light-theme-text": {
                    100: "#212121",
                    200: "#111111",
                },

                "dark-theme-text": {
                    100: "#fcfeff",
                    200: "#c1c1c1",
                },

                "theme-orange": "#ff6a52",
                "theme-yellow": "#fcf877",
                "theme-blue": "#43d7ff",
            },

            fontFamily: {
                calibre: "Calibre",
                "calibre-bold": "Calibre Bold",
                "calibre-semibold": "Calibre SemiBold",
                'noe-display': 'noe-display'
            },

            spacing: {
                half: "0.2rem",
                "1/10": "10%",
                "1/5": "20%",
                "1/8": "15%",
                "130%": "130%",
                "150%": "150%",
                "200%": "200%",
            },

            backgroundImage: {
                "button-bgd-1": "url('/img/button-background-01.svg')",
                "button-bgd-2": "url('/img/button-background-02.svg')",
            },

            backgroundSize: {
                "150%": "150%",
            },

            minWidth: {
                "1/2": "50%",
            },

            rounded: {
                xxl: "1.25rem",
            },

            screens: {
                'mobile'  : '375px',
                'tablet'  : '744px',
                'laptop'  : '1024px',
                'desktop' : '1280px',
                'full-hd' : '1536px',
                'true-hd' : '1920px',
                'tv'      : '2560px'
            },
        },
    },
    plugins: [],
}
