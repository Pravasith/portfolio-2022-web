import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Fun from "@components/Pages/Fun"
import { ESrcType, MediaBlockType } from "@lib/api/mediaGroups/interface"
import api from "@services/api"
import { API_ROUTE_URLS } from "@services/routes"
import { metaData } from "@utils/constants"
import { BlogsType } from "@lib/api/blogs/interface"

interface FunPageProps {
    mediaBlocks: MediaBlockType[]
}

const FunPage: NextPage<FunPageProps> = ({ mediaBlocks }) => {
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Fun mediaBlocks={mediaBlocks} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    let funPageMediaBlocks: MediaBlockType[] = []

    await api
        .GET<BlogsType[]>(API_ROUTE_URLS.GET_BLOGS_BY_CATEGORY + "fun")
        .then(res => {
            funPageMediaBlocks = res.map(blog => ({
                src: blog.thumbnail,
                width: 800,
                height: 460,
                type: ESrcType.IMAGE,
                alt: blog.title,
                caption: blog.title,
                showCaption: true,
                hyperlink: "/blogs/" + blog.page,
            }))
        })
        .catch(err => {
            console.error(err)
        })

    return {
        props: {
            mediaBlocks: funPageMediaBlocks,
        },
    }
}

export default FunPage
