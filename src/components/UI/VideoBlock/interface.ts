import { VideoBlockType } from "@lib/api/mediaBlocks/interface"
import { ETextAlign } from "@lib/api/textBlocks/interface"

export interface VideoBlockProps {
    videoBlock: VideoBlockType
    link?: string
    alignCaptionText?: ETextAlign
}
