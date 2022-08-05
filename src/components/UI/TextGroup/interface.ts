import { ETextAlign, TextBlockType } from "@lib/api/textGroups/interface"

export interface TextGroupProps {
    textBlocks: TextBlockType[]
    className?: string
    textAlign?: ETextAlign
    textClassName?: string
}

export interface SpanifiedAndLinkifiedTextProps {
    text: string
}
