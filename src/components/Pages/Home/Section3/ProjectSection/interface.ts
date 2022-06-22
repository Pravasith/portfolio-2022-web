export type Project = {
    title: string
    description: string
    gitHubLink: string
    liveLink: string

    media: {
        imageSrc: string
        imageAlt: string
        type: ESrcType
        id: string
        width: number
        height: number
        caption: string
    }
}

export enum ESrcType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}
