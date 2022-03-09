module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-screen-background": {
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                },
                "dark-screen-background": {
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
