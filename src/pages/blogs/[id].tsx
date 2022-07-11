import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"

import { metaData } from "@utils/constants"
import Blog from "@components/Pages/Blog"

interface FunPageProps {
    // mediaBlocks: MediaBlockType[]
    blogData: string
}

const FunPage: NextPage<FunPageProps> = ({ blogData }) => {
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Blog blogData={blogData} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            blogData: "HELLO",
        },
    }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    // const res = await fetch("https://.../posts")
    const posts = [
        {
            id: "meal-delivery-app",
        },
    ]

    // Get the paths we want to pre-render based on posts
    const paths = posts.map(post => ({
        params: { id: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default FunPage
