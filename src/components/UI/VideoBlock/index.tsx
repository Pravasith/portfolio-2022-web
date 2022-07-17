import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

import TextBlock from "@components/UI/TextGroup"
import { VideoBlockProps } from "./interface"

import styles from "./index.module.scss"

const VideoBlock = (props: VideoBlockProps) => {
    return (
        <div className={`flex-col-center ${styles.videoBlock}`}>
            <video
                autoPlay
                loop
                style={{
                    width: props.videoBlock.width,
                }}
            >
                <source src={props.videoBlock.src} />
            </video>

            {props.videoBlock.showCaption && props.videoBlock.caption && (
                <TextBlock
                    textClassName={`${props.link && styles.videoCaption} ${
                        props.className
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
