import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"

import { metaData } from "@utils/constants"
import Blog from "@components/Pages/Blog"
import { BlogsType } from "@lib/api/blogs/interface"
import { API_ROUTE_URLS } from "@services/routes"
import api from "@services/api"
import { TextGroupType } from "@lib/api/textGroups/interface"
import { MediaGroupType } from "@lib/api/mediaGroups/interface"

interface FunPageProps {
    blogData: BlogsType
    textGroup: TextGroupType
    mediaGroup: MediaGroupType
}

const FunPage: NextPage<FunPageProps> = ({
    blogData,
    textGroup,
    mediaGroup,
}) => {
    const blogMetaData = blogData.metaData ?? metaData

    const { page, id, title, timestamp, thumbnail, userDetails, tags } =
        blogData

    const details = {
        page,
        id,
        title,
        timestamp,
        thumbnail,
        userDetails,
        tags,
        textGroup,
        mediaGroup,
    }

    return (
        <main>
            <Meta {...blogMetaData} />
            <Layout>
                <Blog details={details} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const blogData: BlogsType[] = [],
        textGroup: TextGroupType[] = [],
        mediaGroup: MediaGroupType[] = []

    await Promise.all([
        api.GET<BlogsType[]>(API_ROUTE_URLS.GET_BLOGS_BY_PAGE + params?.id),
        api.GET<TextGroupType[]>(
            API_ROUTE_URLS.GET_TEXT_GROUPS_BY_PAGE + params?.id
        ),
        api.GET<MediaGroupType[]>(
            API_ROUTE_URLS.GET_MEDIA_GROUPS_BY_PAGE + params?.id
        ),
    ])
        .then(([blogs, textBlocks, mediaBlocks]) => {
            // console.log(blogs, textBlocks, mediaBlocks)

            blogData.push(...blogs)
            textGroup.push(...textBlocks)
            mediaGroup.push(...mediaBlocks)
        })
        .catch(err => console.error(err))

    return {
        props: {
            blogData: blogData[0],
            textGroup: textGroup[0] ?? null,
            mediaGroup: mediaGroup[0] ?? null,
        },
    }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    // const res = await fetch("https://.../posts")
    const posts = [
        "meal-delivery-app",
        "three-way-transformer",
        "glasmet",
        "rain-bag",
    ]

    // Get the paths we want to pre-render based on posts
    const paths = posts.map(post => ({
        params: { id: post },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default FunPage
