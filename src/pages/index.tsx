import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { ETextBlockTypes, TextBlocksType } from "@lib/api/textBlocks/interface"
import { API_ROUTE_URLS } from "@lib/api/textBlocks"

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

interface IndexPageProps {
    homePageTextBlocks: TextBlocksType[]
}

const IndexPage: NextPage<IndexPageProps> = ({ homePageTextBlocks }) => {
    return (
        <main>
            <Meta {...metaProps} />
            <Layout>
                <Home homePageTextBlocks={homePageTextBlocks} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    let homePageTextBlocks: TextBlocksType[] = []

    await api
        .GET<TextBlocksType[]>(
            API_ROUTE_URLS.GET_TEXT_BLOCKS_BY_TYPE + ETextBlockTypes.HOME_PAGE
        )
        .then(res => {
            homePageTextBlocks = res
        })
        .catch(err => {
            console.error(err)
        })

    return {
        props: {
            homePageTextBlocks,
        },
    }
}

export default IndexPage
