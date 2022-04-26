import { ETextColorClassNames } from "@lib/themes/colors"

export enum ETextTypes {
    H3 = "h3",
    H1 = "h1",
    P = "p",
}

export type TextBlockType = {
    type: ETextTypes
    text: string
    textColorClassName?: ETextColorClassNames
    spanColorClassName?: ETextColorClassNames
}

export enum ETextAlign {
    LEFT = "text-left",
    RIGHT = "text-right",
}

export interface TextBlockProps {
    textBlock: TextBlockType[]
    textAlign: ETextAlign
}
