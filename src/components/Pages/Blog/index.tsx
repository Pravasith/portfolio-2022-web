import ImageBlock from "@components/UI/ImageBlock"
import TextGroup from "@components/UI/TextGroup"
import VideoBlock from "@components/UI/VideoBlock"
import { BlogContentTypes } from "@lib/api/blogs/interface"
import {
    ESrcType,
    ImageBlockType,
    // MediaBlockType,
    VideoBlockType,
} from "@lib/api/mediaGroups/interface"
import { ETextTypes, TextBlockType } from "@lib/api/textGroups/interface"
import { timeConverter } from "@utils/index"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { useContext } from "react"
import { BlogProps } from "./interface"

const Blog = ({ details }: BlogProps) => {
    const { state } = useContext(ThemeContext)

    const { title, timestamp, userDetails, tags, textGroup, mediaGroup } =
        details

    const sortedBlocks =
        textGroup && mediaGroup
            ? [
                  ...textGroup?.textBlocks?.map(block => ({
                      ...block,
                      mediaType: BlogContentTypes.TEXT_BLOCK,
                  })),
                  ...mediaGroup?.mediaBlocks?.map(block => ({
                      ...block,
                      mediaType: BlogContentTypes.MEDIA_BLOCK,
                  })),
              ].sort((a, b) => (a.order && b.order ? a.order - b.order : -1))
            : []

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
                return <ImageBlock imageBlock={block as ImageBlockType} />
            } else return <VideoBlock videoBlock={block as VideoBlockType} />
        }
    })

    return (
        <div className="flex-row-center">
            <div className="w-1/3">
                <header className="my-10">
                    <div className="flex flex-row items-center justify-between">
                        <TextGroup
                            textBlocks={[
                                {
                                    type: ETextTypes.P,
                                    text: timeConverter(timestamp),
                                    order: 0,
                                },
                            ]}
                        />

                        {tags.map(
                            (tag, i) =>
                                i < 4 && (
                                    <p
                                        key={"tag-" + i}
                                        className={` py-1 px-4 text-xs rounded-full shrink-0 mx-1 ${
                                            state?.currentTheme ===
                                            EThemes.LIGHT
                                                ? "text-black bg-white/80"
                                                : "text-gray-300 bg-white/20"
                                        }`}
                                    >
                                        {tag}
                                    </p>
                                )
                        )}
                    </div>

                    <TextGroup
                        textBlocks={[
                            { type: ETextTypes.H1, text: title, order: 0 },
                        ]}
                    />

                    <div className="flex-row-west">
                        <ImageBlock
                            imageBlock={{
                                src: userDetails.profileImage,
                                alt: `${userDetails.username}'s profile picture`,
                                width: 40,
                                height: 40,
                            }}
                            className={`border-2 mr-3 rounded-full ${
                                state?.currentTheme === EThemes.LIGHT
                                    ? "border-black bg-black"
                                    : "border-white bg-white"
                            }`}
                        />
                        <TextGroup
                            textBlocks={[
                                {
                                    type: ETextTypes.P,
                                    text: `A blog post by :st>:ln>${userDetails.fullName}:ln:/<ln:<st:`,
                                    order: 0,
                                },
                            ]}
                        />
                    </div>
                </header>
                <article>{content}</article>
            </div>
        </div>
    )
}

export default Blog
