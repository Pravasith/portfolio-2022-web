// import TextBlock from "@components/UI/TextBlock"

const Blog = ({ mediaBlocks }: { mediaBlocks: string }) => {
    // const blog = {
    //     metaData: "",
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
    //     textBlocksId: "textBlocksId",
    //     mediaBlocksId: "mediaBlocksId",
    // } // THIS IS IN THE DB

    // const blocks = [{}]

    return (
        <div className="flex-row-center">
            <div className="w-1/2 bg-pink-300">
                {/* <TextBlock textBlock={} /> */}
                <h1>{mediaBlocks}</h1>
            </div>
        </div>
    )
}

export default Blog
