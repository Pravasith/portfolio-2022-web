import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { ETextBlockTypes, TextBlocksType } from "@lib/api/textBlocks/interface"
import { API_ROUTE_URLS } from "@lib/api/textBlocks"
import { ProjectsType } from "@lib/api/projects/interface"

const metaProps = {
    pageTitle: "Pravasith - Full Stack Developer 🔶 🟨 🟢 🔹",
    ogSiteName: "pravasith.design",
    ogTitle: "Pravasith - Full Stack Developer 🔶 🟨 🟢 🔹",
    ogType: "website",
    ogUrl: "https://pravasith.design/",
    twitterCreator: "@pravasith",
    description:
        "A Full Stack TypeScript/JavaScript/Java Developer living in Toronto, Canada. 🇨🇦. ReactJS🔹NodeJS🔹NextJS🔹GraphQL🔹RestAPI🔹MongoDB🔹",
    twitterDescription:
        "A Full Stack TypeScript/JavaScript/Java Developer living in Toronto, Canada. 🇨🇦. ReactJS🔹NodeJS🔹NextJS🔹GraphQL🔹RestAPI🔹MongoDB🔹",
    ogDescription:
        "A Full Stack TypeScript/JavaScript/Java Developer living in Toronto, Canada. 🇨🇦. ReactJS🔹NodeJS🔹NextJS🔹GraphQL🔹RestAPI🔹MongoDB🔹",
    ogImageAlt: "An Illustration of a Creative Web Developer",
    twitterImageAlt: "An Illustration of a Creative Web Developer",
    // TODO: CHANGE IMAGES
    ogImage: "https://cassie.codes/images/meta.jpg",
    twitterImage: "https://cassie.codes/images/meta.jpg",
}

interface IndexPageProps {
    homePageTextBlocks: TextBlocksType[]
    projects: ProjectsType
}

const IndexPage: NextPage<IndexPageProps> = ({
    homePageTextBlocks,
    projects,
}) => {
    return (
        <main>
            <Meta {...metaProps} />
            <Layout>
                <Home
                    homePageTextBlocks={homePageTextBlocks}
                    projects={projects}
                />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    let homePageTextBlocks: TextBlocksType[] = [],
        projects

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

    await api
        .GET<ProjectsType[]>(API_ROUTE_URLS.GET_PROJECTS)
        .then(res => {
            projects = res[0]
        })
        .catch(err => {
            console.error(err)
        })

    return {
        props: {
            homePageTextBlocks,
            projects,
        },
    }
}

export default IndexPage
