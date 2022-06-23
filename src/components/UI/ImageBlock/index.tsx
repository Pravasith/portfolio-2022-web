import TextBlock from "@ui/TextBlock"
import Image from "next/image"
import { ETextAlign, ETextTypes } from "@lib/api/textBlocks/interface"
import { ImageBlockProps } from "./interface"
import { ETextColorClassNames } from "@lib/themes/interface"

const ImageBlock = (props: ImageBlockProps) => {
    return (
        <div className={`flex-col-center`}>
            <Image
                src={props.imageBlock.imageSrc}
                alt={props.imageBlock.imageAlt}
                width={props.imageBlock.width}
                height={props.imageBlock.height}
            />

            {props.imageBlock.showCaption && (
                <TextBlock
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlock={[
                        {
                            text: props.imageBlock.caption,
                            type: ETextTypes.P,
                            textColorClassName:
                                ETextColorClassNames.LIGHT_THEME_TEXT_200,
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default ImageBlock
