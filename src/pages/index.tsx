import type { NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"

const metaProps = {
    pageTitle: "Pravasith  - Creative Web Developer 🔶 🟨 🟢 🔹",
    ogSiteName: "pravasith.design",
    ogTitle: "Pravasith  - Creative Web Developer 🔶 🟨 🟢 🔹",
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

const IndexPage: NextPage = () => {
    return (
        <main>
            <Meta {...metaProps} />
            <Layout>
                <Home />
            </Layout>
        </main>
    )
}

export default IndexPage
