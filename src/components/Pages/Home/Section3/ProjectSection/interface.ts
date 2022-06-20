export type Project = {
    imageSrc: string
    imageAlt: string
    type: ESrcType
    id: string
    width: number
    height: number
    details: {
        title: string
        description?: string
        gitHubLink?: string
        liveLink?: string
    }
}

export enum ESrcType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}
