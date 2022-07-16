import { BlockGroupTypes } from "@lib/api/blogs/interface"

export enum ESrcType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}

export type ImageBlockType = {
    src: string
    width: number
    height: number
    type?: ESrcType.IMAGE
    alt?: string
    caption?: string
    showCaption?: boolean
    hyperlink?: string
}

export type VideoBlockType = {
    src: string
    width: number
    height: number
    type?: ESrcType.VIDEO
    alt?: string
    caption?: string
    showCaption?: boolean
    hyperlink?: string
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
