import TextBlock from "@ui/TextBlock"
import Image from "next/image"
import { ETextAlign, ETextTypes } from "@lib/api/textBlocks/interface"
import { ImageBlockProps } from "./interface"

import styles from "./index.module.scss"

const ImageBlock = (props: ImageBlockProps) => {
    return (
        <div className={`flex-col-center ${styles.imageBlock}`}>
            <Image
                src={props.imageBlock.src}
                alt={props.imageBlock.alt}
                width={props.imageBlock.width}
                height={props.imageBlock.height}
            />

            {props.imageBlock.showCaption && (
                <TextBlock
                    textClassName={`${props.link && styles.imageCaption}`}
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlock={[
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
