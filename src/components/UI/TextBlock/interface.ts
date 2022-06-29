import { ETextAlign, TextBlockType } from "@lib/api/textBlocks/interface"

export interface TextBlockProps {
    textBlock: TextBlockType[]
    textAlign: ETextAlign
    textClassName?: string
}
