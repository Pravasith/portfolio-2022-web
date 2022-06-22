import { TextBlockType } from "@components/UI/TextBlock/interface"

export enum ETextBlockTypes {
    HOME_PAGE = "HOME_PAGE",
    PROJECT_SECTION = "PROJECT_SECTION",
}

export type TextBlocksType = {
    name: string
    type: ETextBlockTypes
    textBlocks: TextBlockType[]
}
