import Layout from "@components/Layout"
import Blog from "@components/Pages/Blog"
import { BlogProps } from "@components/Pages/Fun/interface"
import { BlogsType } from "@lib/api/blogs/interface"
import { ESrcType, MediaBlockType } from "@lib/api/mediaGroups/interface"
import api from "@services/api"
import { BASE_URLS } from "@services/routes"
import { GetStaticProps } from "next"

const BlogsPage = ({ mediaBlocks }: BlogProps) => {
    return (
        <main>
            {/* <Meta {...metaData} /> */}
            <Layout>
                <Blog mediaBlocks={mediaBlocks} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    let funPageMediaBlocks: MediaBlockType[] = []

    await api
        .GET<BlogsType[]>(BASE_URLS.BLOG + "?category=fun")
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

export default BlogsPage
