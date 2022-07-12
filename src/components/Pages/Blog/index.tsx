import ImageBlock from "@components/UI/ImageBlock"
import TextGroup from "@components/UI/TextGroup"
import VideoBlock from "@components/UI/VideoBlock"
import { BlogContentTypes } from "@lib/api/blogs/interface"
import {
    ESrcType,
    // MediaBlockType,
    VideoBlockType,
} from "@lib/api/mediaGroups/interface"
import { TextBlockType } from "@lib/api/textGroups/interface"
import { BlogProps } from "./interface"

const Blog = ({ details }: BlogProps) => {
    const {
        // page,
        // id,
        // title,
        // timestamp,
        // thumbnail,
        // userDetails,
        // tags,
        textGroup,
        mediaGroup,
    } = details

    const sortedBlocks = [
        ...textGroup.textBlocks.map(block => ({
            ...block,
            mediaType: BlogContentTypes.TEXT_BLOCK,
        })),
        ...mediaGroup.mediaBlocks.map(block => ({
            ...block,
            mediaType: BlogContentTypes.MEDIA_BLOCK,
        })),
    ].sort((a, b) => a.order - b.order)

    const content = sortedBlocks.map(block => {
        if (block.mediaType === BlogContentTypes.TEXT_BLOCK) {
            return (
                <TextGroup
                    textClassName="no-underline"
                    textBlocks={[block as TextBlockType]}
                />
            )
        } else if (block.mediaType === BlogContentTypes.MEDIA_BLOCK) {
            if (block.type === ESrcType.IMAGE) {
                return <ImageBlock imageBlock={block} />
            } else return <VideoBlock videoBlock={block as VideoBlockType} />
        }
    })

    return (
        <div className="flex-row-center">
            <div className="w-1/3">
                {/* <TextGroup textBlock={} /> */}
                {content}
            </div>
        </div>
    )
}

export default Blog
