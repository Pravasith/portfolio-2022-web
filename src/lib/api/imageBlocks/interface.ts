import { ESrcType } from "@lib/api/mediaBlocks/interface"

export type ImageBlockType = {
    imageSrc: string
    imageAlt: string
    type: ESrcType.IMAGE
    id: string
    width: number
    height: number
    caption: string
    showCaption?: boolean
    hyperlink?: string
}
