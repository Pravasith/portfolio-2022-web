import { ETextAlign, ETextTypes } from "@lib/api/textBlocks/interface"

import TextBlock from "@ui/TextBlock"
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
