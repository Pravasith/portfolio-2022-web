import { BlockGroupTypes } from "@lib/api/blogs/interface"

export enum EBlockPages {
    HOME_PAGE = "HOME_PAGE",
    PROJECT_SECTION = "PROJECT_SECTION",
    BLOG = "BLOG",
}

export enum ETextTypes {
    H3 = "h3",
    H1 = "h1",
    P = "p",
    LI = "li",
}

export type TextBlockType = {
    type: ETextTypes
    text: string
}

export enum ETextAlign {
    LEFT = "text-left",
    RIGHT = "text-right",
    CENTER = "text-center",
}

export type TextSectionType = {
    name: string
    order: number
    textBlocks: TextBlockType[]
}

export type TextGroupType = {
    page: string
    type: BlockGroupTypes.TEXT_GROUP
    sections: TextSectionType[]
}
