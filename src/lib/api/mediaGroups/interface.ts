import { BlockGroupTypes } from "@lib/api/blogs/interface"

export enum ESrcType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}

export enum BlockType {
    TEXT_BLOCK = "TEXT_BLOCK",
    MEDIA_BLOCK = "MEDIA_BLOCK",
}
export interface ImageBlockType {
    src: string
    width: number
    height: number
    type?: ESrcType.IMAGE
    alt?: string
    caption?: string
    showCaption?: boolean
    hyperlink?: string
    mediaType?: BlockType.MEDIA_BLOCK
}

export interface VideoBlockType {
    src: string
    width: number
    height: number
    type?: ESrcType.VIDEO
    alt?: string
    caption?: string
    showCaption?: boolean
    hyperlink?: string
    mediaType?: BlockType.MEDIA_BLOCK
}

export type MediaBlockType = ImageBlockType | VideoBlockType

export type MediaSectionType = {
    name: string
    order: number
    mediaBlocks: MediaBlockType[]
}

export type MediaGroupType = {
    page: string
    type: BlockGroupTypes.MEDIA_GROUP
    sections: MediaSectionType[]
}
