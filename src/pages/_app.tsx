// import "tailwindcss/tailwind.css"
import "@assets/sass/global.scss"
import "@styles/global.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
