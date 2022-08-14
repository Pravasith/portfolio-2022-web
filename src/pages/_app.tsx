// import "tailwindcss/tailwind.css" // INTENTIONAL COMMENT:
import "@styles/sass/global.scss"
import "@styles/global.css"

import type { AppProps } from "next/app"
import Script from "next/script"
import { useEffect } from "react"
import getConfig from "next/config"

const App = ({ Component, pageProps }: AppProps) => {
    const { publicRuntimeConfig } = getConfig()

    useEffect(() => {
        console.log(publicRuntimeConfig.googleAnalyticsConfig)
    }, [])

    return (
        <>
            <Script
                id="google-analytics-1"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.googleAnalyticsConfig}`}
            />

            <Script id="google-analytics-2" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${publicRuntimeConfig.googleAnalyticsConfig}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <Component {...pageProps} />
        </>
    )
}

export default App
