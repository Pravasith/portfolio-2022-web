// import "tailwindcss/tailwind.css" // INTENTIONAL COMMENT:
import "@assets/sass/global.scss"
import "@styles/global.css"

import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App
