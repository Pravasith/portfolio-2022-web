import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

import TextBlock from "@components/UI/TextGroup"
import { VideoBlockProps } from "./interface"

const VideoBlock = (props: VideoBlockProps) => {
    return (
        <div className={`flex-col-center ${props.className}`}>
            <div className="relative">
                <div className="z-10 absolute w-full h-full"></div>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        width: props.videoBlock.width,
                    }}
                    src={props.videoBlock.src}
                ></video>
            </div>

            {props.videoBlock.showCaption && props.videoBlock.caption && (
                <TextBlock
                    textClassName={`${props.textClassName}`}
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlocks={[
                        {
                            text: props.videoBlock.caption,
                            type: ETextTypes.P,
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default VideoBlock
