import { ImageBlockType } from "@lib/api/imageBlocks/interface"

export type Project = {
    title: string
    description: string
    gitHubLink: string
    liveLink: string
    media: ImageBlockType
}
