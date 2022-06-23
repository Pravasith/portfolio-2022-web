import { ETextColorClassNames } from "@lib/themes/interface"

export enum ETextBlockTypes {
    HOME_PAGE = "HOME_PAGE",
    PROJECT_SECTION = "PROJECT_SECTION",
}

export type TextBlocksType = {
    name: string
    type: ETextBlockTypes
    textBlocks: TextBlockType[]
}

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
    CENTER = "text-center",
}
