import { BlogContentTypes } from "@lib/api/blogs/interface"

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
    order?: number
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
    order?: number
}

export type MediaBlockType = ImageBlockType | VideoBlockType

export type MediaGroupType = {
    id: string
    name: string
    type: BlogContentTypes
    mediaBlocks: MediaBlockType[]
}
