import { ETextColorClassNames } from "@lib/themes/colors"

export enum ETextTypes {
    H3 = "h3",
    H1 = "h1",
    P = "p",
}

export type TextBlockType = {
    type: ETextTypes
    text: string
}

export interface TextBlockProps {
    textBlock: TextBlockType[]
    colorClassName?: ETextColorClassNames
}
