const Blog = ({ mediaBlocks }: { mediaBlocks: string }) => {
    return (
        <div className="flex-row-center">
            <div className="w-1/2 bg-pink-300">
                <h1>{mediaBlocks}</h1>
            </div>
        </div>
    )
}

export default Blog
