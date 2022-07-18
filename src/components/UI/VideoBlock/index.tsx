import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

import TextBlock from "@components/UI/TextGroup"
import { VideoBlockProps } from "./interface"

import styles from "./index.module.scss"

const VideoBlock = (props: VideoBlockProps) => {
    return (
        <div
            className={`flex-col-center ${styles.videoBlock} ${props.className}`}
        >
            <video
                autoPlay
                muted
                loop
                style={{
                    width: props.videoBlock.width,
                }}
                src={props.videoBlock.src}
            >
                {/* <source src={props.videoBlock.src} /> */}
            </video>

            {props.videoBlock.showCaption && props.videoBlock.caption && (
                <TextBlock
                    textClassName={`${props.link && styles.videoCaption} ${
                        props.textClassName
                    }`}
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
