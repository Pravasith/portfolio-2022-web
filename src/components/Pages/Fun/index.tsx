import ImageBlock from "@components/UI/ImageBlock"
import TextGroup from "@components/UI/TextGroup"
import VideoBlock from "@components/UI/VideoBlock"
import {
    ESrcType,
    ImageBlockType,
    VideoBlockType,
} from "@lib/api/mediaGroups/interface"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@lib/api/textGroups/interface"

// import FunProjects from "@components/Pages/Fun/FunProjects"
import { FunProps } from "./interface"

const Fun = ({ projects }: FunProps) => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H1,
            text: `My design projects 😁 `,
        },
    ]

    return (
        <div className="flex-col-north w-full min-h-screen">
            <div className="w-full">
                <TextGroup
                    textAlign={ETextAlign.LEFT}
                    textBlocks={textBlock}
                    className={`
                        my-20 px-6
                        tablet:px-1/5
                        laptop:px-[25%]
                        desktop:px-[30%]
                        full-hd:px-[33.33%]
                    `}
                />
                {/* <FunProjects mediaBlocks={mediaBlocks} /> */}

                <div
                    className={`
                    my-20
                    
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
                                    ) : project.media.type ===
                                      ESrcType.VIDEO ? (
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
            </div>
        </div>
    )
}

export default Fun
