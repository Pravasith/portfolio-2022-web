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
}

export type MediaBlockType = ImageBlockType | VideoBlockType
