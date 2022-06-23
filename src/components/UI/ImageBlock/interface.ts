import { ImageBlockType } from "@lib/api/imageBlocks/interface"
import { ETextAlign } from "@lib/api/textBlocks/interface"

export interface ImageBlockProps {
    imageBlock: ImageBlockType
    alignCaptionText?: ETextAlign
}
