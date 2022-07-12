import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { EBlockPages, TextGroupType } from "@lib/api/textGroups/interface"
import { API_ROUTE_URLS } from "@services/routes"
import { ProjectsType } from "@lib/api/projects/interface"
import { metaData } from "@utils/constants"

interface IndexPageProps {
    textGroup: TextGroupType[]
    projects: ProjectsType
}

const IndexPage: NextPage<IndexPageProps> = ({ textGroup, projects }) => {
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Home textGroup={textGroup} projects={projects} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const textGroup: TextGroupType[] = [],
        projects: ProjectsType[] = []

    await Promise.all([
        api.GET<TextGroupType[]>(
            API_ROUTE_URLS.GET_TEXT_GROUPS_BY_PAGE + EBlockPages.HOME_PAGE
        ),
        api.GET<ProjectsType[]>(API_ROUTE_URLS.GET_PROJECTS),
    ])
        .then(([textBlocks, projectData]) => {
            textGroup.push(...textBlocks)
            projects.push(...projectData)
        })
        .catch(err => console.error(err))

    return {
        props: {
            textGroup: textGroup,
            projects: projects[0],
        },
    }
}

export default IndexPage
