import Head from "next/head"
import { MetaProps } from "./interface"

const Meta = (props: MetaProps) => {
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
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>

            <title>{props.pageTitle}</title>
            <meta property="og:site_name" content={props.ogSiteName} />
            <meta property="og:title" content={props.ogTitle} />
            <meta property="og:type" content={props.ogType} />
            <meta property="og:url" content={props.ogUrl} />
            <meta name="twitter:creator" content={props.twitterCreator} />
            <meta name="description" content={props.description} />
            <meta
                name="twitter:description"
                content={props.twitterDescription}
            />
            <meta property="og:description" content={props.ogDescription} />
            <meta property="og:image" content={props.ogImage} />
            <meta name="twitter:image" content={props.twitterImage} />
            <meta property="og:image:alt" content={props.ogImageAlt} />
            <meta
                name="twitter:image:alt"
                content={props.twitterImageAlt}
            ></meta>
        </Head>
    )
}

export default Meta
