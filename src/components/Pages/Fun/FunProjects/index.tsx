import { Spirals } from "@components/SVGs/FunPage"

import ImageBlock from "@components/UI/ImageBlock"
import { ESrcType, VideoBlockType } from "@lib/api/mediaGroups/interface"
import VideoBlock from "@components/UI/VideoBlock"

import Link from "next/link"
import { random20Id } from "@utils/index"
import { FunProps } from "@components/Pages/Fun/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"
import { useContext } from "react"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"

const FunProjects = ({ mediaBlocks }: FunProps) => {
    const { state } = useContext(ThemeContext)

    const themeBackground =
        (state?.currentTheme === EThemes.LIGHT ? "bg-white" : "bg-gray-800") +
        " xl:bg-transparent"

    return (
        <div
            className={`
                grid grid-cols-1 gap-2 overflow-x-clip px-6 mb-36
                md:px-1/5
                lg:px-[25%] 
                lg:grid-cols-2
            `}
        >
            {mediaBlocks.map((item, i) => {
                return (
                    <Link
                        key={"media-block-fun-" + i}
                        href={item.hyperlink || "/not-found"}
                    >
                        <a
                            target={"_blank"}
                            key={random20Id() + "-" + i}
                            className={`
                                w-full flex-col-west 
                                ${item.hyperlink && "cursor-pointer"}
                            `}
                        >
                            <div
                                className={`
                                    w-full mb-1 relative mt-10 rounded-3xl overflow-clip
                                    ${themeBackground} 
                                    border-4 hover:border-theme-orange border-transparent
                                `}
                            >
                                {item.type === ESrcType.IMAGE ? (
                                    <ImageBlock
                                        link={item.hyperlink}
                                        alignCaptionText={ETextAlign.LEFT}
                                        imageBlock={item}
                                        textClassName="mx-3"
                                    />
                                ) : (
                                    <VideoBlock
                                        link={item.hyperlink}
                                        alignCaptionText={ETextAlign.LEFT}
                                        videoBlock={item as VideoBlockType}
                                        textClassName="mx-3"
                                    />
                                )}

                                {i === 1 && (
                                    <div className="absolute w-72 h-72 -top-1/2 -right-1/4 -z-10">
                                        <Spirals />
                                    </div>
                                )}
                            </div>
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}

export default FunProjects
