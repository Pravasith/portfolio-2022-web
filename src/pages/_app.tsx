// import "tailwindcss/tailwind.css" // INTENTIONAL COMMENT:
import "@styles/sass/global.scss"
import "@styles/global.css"

import type { AppProps } from "next/app"
import Script from "next/script"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Script
                id="google-analytics-1"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script id="google-analytics-2" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <Component {...pageProps} />
        </>
    )
}

export default App
