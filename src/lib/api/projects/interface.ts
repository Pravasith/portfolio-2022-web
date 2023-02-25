import { ImageBlockType, VideoBlockType } from "@lib/api/mediaGroups/interface"

export type ProjectType = {
    title: string
    description: string
    gitHubLink: string
    liveLink: string
    media: ImageBlockType | VideoBlockType
}

export type ProjectsType = {
    name: string
    projects: ProjectType[]
}
