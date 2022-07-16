import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { TextGroupType, TextSectionType } from "@lib/api/textGroups/interface"
import { API_ROUTE_URLS } from "@services/routes"
import { ProjectsType } from "@lib/api/projects/interface"
import { metaData } from "@utils/constants"

interface IndexPageProps {
    textSections: TextSectionType[]
    projects: ProjectsType[]
}

const IndexPage: NextPage<IndexPageProps> = ({ textSections, projects }) => {
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Home textSections={textSections} projects={projects[0]} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const textSections: TextSectionType[] = [],
        projects: ProjectsType[] = []

    await Promise.all([
        api.GET<TextGroupType[]>(
            API_ROUTE_URLS.GET_TEXT_GROUPS_BY_PAGE + "home"
        ),
        api.GET<ProjectsType[]>(API_ROUTE_URLS.GET_PROJECTS),
    ])
        .then(([textGroups, projectData]) => {
            textSections.push(...textGroups[0].sections)
            projects.push(...projectData)
        })
        .catch(err => console.error(err))

    return {
        props: {
            textSections: textSections,
            projects: projects,
        },
    }
}

export default IndexPage
