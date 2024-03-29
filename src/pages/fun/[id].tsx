import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"

import { metaData } from "@utils/constants"
import BlogDetails from "@components/Pages/BlogDetails"
import { BlogsType } from "@lib/api/blogs/interface"

import api from "@services/api"
import { TextGroupType } from "@lib/api/textGroups/interface"
import { MediaGroupType } from "@lib/api/mediaGroups/interface"
import { BASE_URLS } from "@services/routes"
// import { createClient } from "next-sanity"

interface BlogProps {
    blogData: BlogsType
    textGroup: TextGroupType
    mediaGroup: MediaGroupType
    dummyString: string
}

const Blog: NextPage<BlogProps> = ({ blogData, textGroup, mediaGroup , dummyString}) => {
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
        dummyString
    }

    return (
        <main>
            <Meta {...blogMetaData} />
            <Layout>
                <BlogDetails details={details} />
            </Layout>
        </main>
    )
}

// const client = createClient({
//     projectId: "svub722h",
//     dataset: "production",
//     apiVersion: "2023-10-23",
//     useCdn: false
// });

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
    const blogData: BlogsType[] = [],
        textGroup: TextGroupType[] = [],
        mediaGroup: MediaGroupType[] = [];

    // const blog = await client.fetch(`*[_type == "blog"]`);

    await Promise.all([
        api.GET<BlogsType[]>(BASE_URLS.BLOG + "?page=" + params?.id),
        api.GET<TextGroupType[]>(BASE_URLS.TEXT_GROUPS + "?page=" + params?.id),
        api.GET<MediaGroupType[]>(
            BASE_URLS.MEDIA_GROUPS + "?page=" + params?.id
        ),
    ])
        .then(([blogs, textBlocks, mediaBlocks]) => {
            blogData.push(...blogs)
            textGroup.push(...textBlocks)
            mediaGroup.push(...mediaBlocks)
        })
        .catch(err => console.error(err))

    return {
        props: {
            blogData: blogData[0],
            textGroup: textGroup[0],
            mediaGroup: mediaGroup[0],
            dummyString: 'blog[0].name',
        },
    }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    // const res = await fetch("https://.../posts")
    const posts = [
        // "meal-delivery-app",
        "three-way-transformer",
        // "glasmet",
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

export default Blog
