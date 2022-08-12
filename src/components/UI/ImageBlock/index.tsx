import TextGroup from "@components/UI/TextGroup"
import Image from "next/image"
import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"
import { ImageBlockProps } from "./interface"

const ImageBlock = (props: ImageBlockProps) => {
    return (
        <div className={`flex-col-center ${props.className}`}>
            <div className="relative text-[0]">
                <div className="z-10 absolute w-full h-full"></div>
                <Image
                    src={props.imageBlock.src}
                    alt={props.imageBlock.alt}
                    width={props.imageBlock.width}
                    height={props.imageBlock.height}
                    objectFit="contain"
                />
            </div>

            {props.imageBlock.showCaption && props.imageBlock.caption && (
                <TextGroup
                    textClassName={`${props.link} ${props.textClassName} my-0`}
                    textAlign={props.alignCaptionText ?? ETextAlign.CENTER}
                    textBlocks={[
                        {
                            text: `:st>${props.imageBlock.caption}<st:`,
                            type: ETextTypes.P,
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default ImageBlock
