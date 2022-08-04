import Layout from "@components/Layout"
import Blog from "@components/Pages/Blog"

const BlogsPage = () => {
    return (
        <main>
            {/* <Meta {...metaData} /> */}
            <Layout>
                <Blog />
            </Layout>
        </main>
    )
}

export default BlogsPage
