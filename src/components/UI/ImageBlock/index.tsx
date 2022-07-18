import TextGroup from "@components/UI/TextGroup"
import Image from "next/image"
import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"
import { ImageBlockProps } from "./interface"

import styles from "./index.module.scss"

const ImageBlock = (props: ImageBlockProps) => {
    return (
        <div
            className={`flex-col-center ${styles.imageBlock} ${props.className}`}
        >
            <Image
                src={props.imageBlock.src}
                alt={props.imageBlock.alt}
                width={props.imageBlock.width}
                height={props.imageBlock.height}
                objectFit={"contain"}
            />

            {props.imageBlock.showCaption && props.imageBlock.caption && (
                <TextGroup
                    textClassName={`${props.link && styles.imageCaption} ${
                        props.textClassName
                    }`}
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlocks={[
                        {
                            text: props.imageBlock.caption,
                            type: ETextTypes.P,
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default ImageBlock
