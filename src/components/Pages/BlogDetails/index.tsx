import ImageBlock from "@components/UI/ImageBlock"
import TextGroup from "@components/UI/TextGroup"
import {
    ESrcType,
    ImageBlockType,
    MediaBlockType,
    MediaSectionType,
    VideoBlockType,
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
import VideoBlock from "@components/UI/VideoBlock"

const BlogDetails = ({ details }: BlogProps) => {
    const { state } = useContext(ThemeContext)

    const { title, timestamp, userDetails, tags, textGroup, mediaGroup } =
        details

    const sections = new Map<string, (TextBlockType | MediaBlockType)[]>()

    const sectionsJSX: JSX.Element[] = []

    textGroup.sections.forEach(section => {
        section.textBlocks
    })
    ;[...textGroup.sections, ...mediaGroup.sections]
        .sort((a, b) => a.order - b.order)
        .forEach(section => {
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

    sections.forEach((section, i) => {
        sectionsJSX.push(
            <section key={"section-blog-" + i} className="my-24">
                {section.map((block, j) => {
                    if ("src" in block) {
                        // MediaType
                        if (block.type === ESrcType.IMAGE) {
                            return (
                                <ImageBlock
                                    className="my-10"
                                    textClassName="text-gray-500 text-sm"
                                    key={"blocks-" + j + "" + i}
                                    imageBlock={block as ImageBlockType}
                                />
                            )
                        } else
                            return (
                                <VideoBlock
                                    className="my-10"
                                    textClassName="text-gray-500 text-sm"
                                    key={"blocks-" + j + "" + i}
                                    videoBlock={block as VideoBlockType}
                                />
                            )
                    } else {
                        return (
                            <TextGroup
                                key={"blocks-" + j + "" + i}
                                textClassName="no-underline"
                                textBlocks={[block as TextBlockType]}
                            />
                        )
                    }
                })}
            </section>
        )
    })

    return (
        <div className="flex-row-center">
            <div
                className={`
                    w-full px-6
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%]
                    full-hd:px-[33.33%]
                `}
            >
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

                        <div className="my-2 flex-row-center">
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
                            } `}
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

                {sectionsJSX}
            </div>
        </div>
    )
}

export default BlogDetails
