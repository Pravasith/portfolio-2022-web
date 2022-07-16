import ImageBlock from "@components/UI/ImageBlock"
import TextGroup from "@components/UI/TextGroup"
import {
    MediaBlockType,
    MediaSectionType,
} from "@lib/api/mediaGroups/interface"
import {
    ETextTypes,
    TextBlockType,
    TextSectionType,
} from "@lib/api/textGroups/interface"
import { timeConverter } from "@utils/index"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { useContext } from "react"
import { BlogProps } from "./interface"

const Blog = ({ details }: BlogProps) => {
    const { state } = useContext(ThemeContext)

    const { title, timestamp, userDetails, tags, textGroup, mediaGroup } =
        details

    const sections = new Map<string, (TextBlockType | MediaBlockType)[]>()

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    // }

    ;[...textGroup.sections, ...mediaGroup.sections].forEach(section => {
        if (sections.has(section.name)) {
            sections.set(section.name, [
                ...(sections.get(section.name) as (
                    | TextBlockType
                    | MediaBlockType
                )[]),
                ...((section as TextSectionType).textBlocks ??
                    (section as MediaSectionType).mediaBlocks),
            ])
        } else
            sections.set(section.name, [
                ...((section as TextSectionType).textBlocks ??
                    (section as MediaSectionType).mediaBlocks),
            ])
    })

    // console.log(sections)

    // const content = sortedBlocks.map((block, i) => {
    //     if (block.mediaType === BlogContentTypes.TEXT_BLOCK) {
    //         return (
    //             <TextGroup
    //                 key={"blocks-" + i}
    //                 textClassName="no-underline"
    //                 textBlocks={[block as TextBlockType]}
    //             />
    //         )
    //     } else if (block.mediaType === BlogContentTypes.MEDIA_BLOCK) {
    //         if (block.type === ESrcType.IMAGE) {
    //             return (
    //                 <ImageBlock
    //                     key={"blocks-" + i}
    //                     imageBlock={block as ImageBlockType}
    //                 />
    //             )
    //         } else
    //             return (
    //                 <VideoBlock
    //                     key={"blocks-" + i}
    //                     videoBlock={block as VideoBlockType}
    //                 />
    //             )
    //     }
    // })

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
                        textBlocks={[{ type: ETextTypes.H1, text: title }]}
                    />

                    <div className="flex-row-west">
                        <ImageBlock
                            imageBlock={{
                                src: userDetails.profileImage,
                                alt: `${userDetails.username}'s profile picture`,
                                width: 40,
                                height: 40,
                            }}
                            className={`border-2 mr-3 rounded-2xl ${
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
                                },
                            ]}
                        />
                    </div>
                </header>
                {/* <div>{content}</div> */}
            </div>
        </div>
    )
}

export default Blog
