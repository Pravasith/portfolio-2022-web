import { ETextAlign, TextBlockType } from "@lib/api/textGroups/interface"

export interface TextGroupProps {
    textBlocks: TextBlockType[]
    textAlign?: ETextAlign
    textClassName?: string
}

export interface SpanifiedAndLinkifiedTextProps {
    text: string
}
