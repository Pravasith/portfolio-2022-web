import Head from "next/head"

const seoData = {
    pageTitle: "Pravasith  - Creative Web Developer 🔶 🟨 🟢 🔹",
    ogSiteName: "pravasith.design",
    ogTitle: "Pravasith - Creative Web Developer   ",
    ogType: "website",
    ogUrl: "https://pravasith.design/",
    twitterCreator: "@pravasith",
    description:
        "A 🟧🟨 Creative Web Developer 🟩🟦 living in Toronto, Canada. 🇨🇦",
    twitterDescription:
        "A 🟧🟨 Creative Web Developer 🟩🟦 living in Toronto, Canada. 🇨🇦",
    ogDescription:
        "A 🟧🟨 Creative Web Developer 🟩🟦 living in Toronto, Canada. 🇨🇦",
    ogImageAlt: "An Illustration of a Creative Web Developer",
    twitterImageAlt: "An Illustration of a Creative Web Developer",
    // TODO: CHANGE IMAGES
    ogImage: "https://cassie.codes/images/meta.jpg",
    twitterImage: "https://cassie.codes/images/meta.jpg",
}

const Meta = () => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            {/* <link
                rel="alternate"
                type="application/rss+xml"
                title=""
                href="https://cassie.codes/feed.xml"
            /> */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/favicon-16x16.png"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                crossOrigin=""
                href="/fonts/mosk-600.woff2"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff"
                crossOrigin=""
                href="/fonts/mosk-600.woff"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                crossOrigin=""
                href="/fonts/mosk-900.woff2"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff"
                crossOrigin=""
                href="/fonts/mosk-900.woff"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                crossOrigin=""
                href="/fonts/jenthill.woff2"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff"
                crossOrigin=""
                href="/fonts/jenthill.woff"
            />
            <title>{seoData.pageTitle}</title>
            <meta property="og:site_name" content={seoData.ogSiteName} />
            <meta property="og:title" content={seoData.ogTitle} />
            <meta property="og:type" content={seoData.ogType} />
            <meta property="og:url" content={seoData.ogUrl} />
            <meta name="twitter:creator" content={seoData.twitterCreator} />
            <meta name="description" content={seoData.description} />
            <meta
                name="twitter:description"
                content={seoData.twitterDescription}
            />
            <meta property="og:description" content={seoData.ogDescription} />
            <meta property="og:image" content={seoData.ogImage} />
            <meta name="twitter:image" content={seoData.twitterImage} />
            <meta property="og:image:alt" content={seoData.ogImageAlt} />
            <meta
                name="twitter:image:alt"
                content={seoData.twitterImageAlt}
            ></meta>
        </Head>
    )
}

export default Meta
