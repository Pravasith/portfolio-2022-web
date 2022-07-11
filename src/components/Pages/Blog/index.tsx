// import TextBlock from "@components/UI/TextBlock"

const Blog = ({ blogData }: { blogData: string }) => {
    // const blog = {
    //     metaData: "",
    //     page: "unique-page",
    //     id: "blog_id",
    //     title: "Meal Delivery App, a UX Case Study.",
    //     timestamp: Date.now(),
    //     thumbnail: "",
    //     userDetails: {
    //         fullName: "Pravasith Chinthoju",
    //         username: "pravasith",
    //         id: "",
    //         profile_pic: "",
    //     },
    //     tags: ["tag1", "tag2"],
    //     content: "MediaGroups + TextGroups from DB",
    // } // THIS IS IN THE DB

    // const blocks = [{}]

    return (
        <div className="flex-row-center">
            <div className="w-1/2 bg-pink-300">
                {/* <TextBlock textBlock={} /> */}
                <h1>{blogData}</h1>
            </div>
        </div>
    )
}

export default Blog
