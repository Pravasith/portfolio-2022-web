import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { EBlockPages, TextBlocksType } from "@lib/api/textBlocks/interface"
import { API_ROUTE_URLS } from "@services/routes"
import { ProjectsType } from "@lib/api/projects/interface"
import { metaData } from "@utils/constants"

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
            <Meta {...metaData} />
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
            API_ROUTE_URLS.GET_TEXT_BLOCKS_BY_PAGE + EBlockPages.HOME_PAGE
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
