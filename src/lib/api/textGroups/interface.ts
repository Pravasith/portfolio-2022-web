import { BlogContentTypes } from "@lib/api/blogs/interface"

export enum EBlockPages {
    HOME_PAGE = "HOME_PAGE",
    PROJECT_SECTION = "PROJECT_SECTION",
    BLOG = "BLOG",
}

export type TextGroupType = {
    name: string
    page: string
    type: BlogContentTypes
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
    order?: number
}

export enum ETextAlign {
    LEFT = "text-left",
    RIGHT = "text-right",
    CENTER = "text-center",
}
