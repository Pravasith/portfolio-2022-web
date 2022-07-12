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

            {props.videoBlock.showCaption && (
                <TextBlock
                    textClassName={`${props.link && styles.videoCaption}`}
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlocks={[
                        {
                            text: props.videoBlock.caption,
                            type: ETextTypes.P,
                            order: 0,
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default VideoBlock
