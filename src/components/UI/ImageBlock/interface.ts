import { ImageBlockType } from "@lib/api/mediaGroups/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"

export interface ImageBlockProps {
    imageBlock: ImageBlockType
    className?: string
    link?: string
    alignCaptionText?: ETextAlign
    textClassName?: string
}
