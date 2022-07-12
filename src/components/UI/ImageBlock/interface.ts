import { ImageBlockType } from "@lib/api/mediaGroups/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"

export interface ImageBlockProps {
    imageBlock: ImageBlockType
    link?: string
    alignCaptionText?: ETextAlign
}
