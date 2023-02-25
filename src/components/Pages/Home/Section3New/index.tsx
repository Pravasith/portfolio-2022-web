import { Spikes } from "@components/SVGs/HomeSection3"
import TextGroup from "@components/UI/TextGroup"
import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

import ImageBlock from "@components/UI/ImageBlock"
import { Section3Props } from "../interface"
import {
    ESrcType,
    ImageBlockType,
    VideoBlockType,
} from "@lib/api/mediaGroups/interface"
import VideoBlock from "@components/UI/VideoBlock"
import Button from "@components/UI/Button"
import { useState } from "react"

const Section3New = ({ textBlocks, projects }: Section3Props) => {
    const [showMoreItems, setShowMoreItems] = useState<boolean>(false)

    const toggleShowMoreItems = () => {
        setShowMoreItems(!showMoreItems)
    }

    return (
        <div className="section-3-container flex-col-center">
            <div className="flex-col-center w-full mt-10 mb-44">
                <div className="w-80">
                    <Spikes />
                </div>
            </div>

            {/* TEXT BLOCK */}
            <div
                className={`
                    flex-col-west px-6 w-full
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%]
                `}
            >
                <div className="section-3-text-block">
                    <TextGroup
                        textAlign={ETextAlign.LEFT}
                        textBlocks={textBlocks}
                    />
                </div>
            </div>

            <div
                className={`
                    mt-20
                    ${showMoreItems ? "" : "max-h-[95vh]"}
                    overflow-clip rounded-2xl
                    px-6 w-full
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[15%]
                `}
            >
                <div
                    className={`
                        masonry-container 
                    `}
                >
                    {projects.map((project, i) => {
                        return (
                            <div
                                className="masonry-item rounded-2xl overflow-clip bg-white"
                                key={"project-" + i}
                            >
                                {project.media.type === ESrcType.IMAGE ? (
                                    <ImageBlock
                                        imageBlock={
                                            project.media as ImageBlockType
                                        }
                                    />
                                ) : project.media.type === ESrcType.VIDEO ? (
                                    <VideoBlock
                                        videoBlock={
                                            project.media as VideoBlockType
                                        }
                                    />
                                ) : null}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="w-full h-32 flex-row-center">
                <Button
                    text={showMoreItems ? "Show less" : "Show more projects"}
                    onClick={toggleShowMoreItems}
                />
            </div>

            {/* OTHER FUN PROJECTS */}
            <TextGroup
                className={`
                    my-10 px-6
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%] desktop:mb-40
                    full-hd:px-[33.33%] full-hd:mb-20
                `}
                textBlocks={[
                    {
                        text: ":ln>🔖 If you're a designer, checkout my other fun projects:ln:/fun<ln:",
                        type: ETextTypes.H3,
                    },
                ]}
            />
        </div>
    )
}

export default Section3New
