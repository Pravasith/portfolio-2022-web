import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"

import { TextSectionType } from "@lib/api/textGroups/interface"

import { ProjectType } from "@lib/api/projects/interface"
import { metaData } from "@utils/constants"

import { INDEX_PAGE_DATA_FREELANCE } from "@lib/api/database"

interface IndexPageProps {
    textSections: TextSectionType[]
    projects: ProjectType[]
}

const IndexPage: NextPage<IndexPageProps> = ({ textSections, projects }) => {
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Home textSections={textSections} projects={projects} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const textSections: TextSectionType[] = [],
        projects: ProjectType[] = []

    textSections.push(...INDEX_PAGE_DATA_FREELANCE.textSections)
    projects.push(...INDEX_PAGE_DATA_FREELANCE.projects)

    // TODO: Change this for BE data
    // await Promise.all([
    //     api.GET<TextGroupType[]>(BASE_URLS.TEXT_GROUPS + "?page=home"),
    //     api.GET<ProjectsType[]>(BASE_URLS.PROJECTS),
    // ])
    //     .then(([textGroups, projectData]) => {
    //         // textSections.push(...textGroups[0].sections)
    //         // projects.push(...projectData)
    //     })
    //     .catch(err => console.error(err))
    //     .finally(() => {
    //         if (!textSections.length || !projects.length) {
    //             textSections.push(...INDEX_PAGE_DATA.textSections)
    //             projects.push(...INDEX_PAGE_DATA.projects)
    //         }
    //     })

    return {
        props: {
            textSections: textSections,
            projects: projects,
        },
    }
}

export default IndexPage
