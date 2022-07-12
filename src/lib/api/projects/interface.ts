import { ImageBlockType } from "@lib/api/mediaGroups/interface"

export type ProjectType = {
    title: string
    description: string
    gitHubLink: string
    liveLink: string
    media: ImageBlockType
}

export type ProjectsType = {
    name: string
    projects: ProjectType[]
}
