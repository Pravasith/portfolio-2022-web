import { BlogContentTypes } from "@lib/api/blogs/interface"

export enum ESrcType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}

export type ImageBlockType = {
    src: string
    alt: string
    type: ESrcType.IMAGE
    id: string
    width: number
    height: number
    caption: string
    showCaption?: boolean
    hyperlink?: string
    order: number
}

export type VideoBlockType = {
    src: string
    alt: string
    type: ESrcType.VIDEO
    id: string
    width: number
    height: number
    caption: string
    showCaption?: boolean
    hyperlink?: string
    order: number
}

export type MediaBlockType = ImageBlockType | VideoBlockType

export type MediaGroupType = {
    id: string
    name: string
    type: BlogContentTypes
    mediaBlocks: MediaBlockType[]
}
