import { ETextAlign, ETextTypes } from "@lib/api/textBlocks/interface"

import TextBlock from "@ui/TextBlock"
import { VideoBlockProps } from "./interface"

const VideoBlock = (props: VideoBlockProps) => {
    return (
        <div className={`flex-col-center`}>
            <video
                autoPlay
                loop
                style={{
                    width: props.videoBlock.width,
                }}
            >
                <source src={props.videoBlock.src} />
            </video>

            {props.videoBlock.showCaption && (
                <TextBlock
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlock={[
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
