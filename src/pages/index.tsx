import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { TextGroupType, TextSectionType } from "@lib/api/textGroups/interface"

import { ProjectsType } from "@lib/api/projects/interface"
import { metaData } from "@utils/constants"
import { BASE_URLS } from "@services/routes"

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
        api.GET<TextGroupType[]>(BASE_URLS.TEXT_GROUPS + "?page=home"),
        api.GET<ProjectsType[]>(BASE_URLS.PROJECTS),
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
