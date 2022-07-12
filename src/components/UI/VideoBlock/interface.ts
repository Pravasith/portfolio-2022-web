import { VideoBlockType } from "@lib/api/mediaGroups/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"

export interface VideoBlockProps {
    videoBlock: VideoBlockType
    link?: string
    alignCaptionText?: ETextAlign
}
