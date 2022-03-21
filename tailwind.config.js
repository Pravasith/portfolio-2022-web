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
                    100: "#d8d8d8",
                    200: "#f2f2f2",
                },
            },
            fontFamily: {
                calibre: "Calibre",
                "calibre-bold": "Copyright Klim Type Foundry",
            },

            width: {},
        },
    },
    plugins: [],
}