export type Project = {
    imageSrc: string
    imageAlt: string
    id: string
    width: number
    height: number
    details: {
        title: string
        description: string
        gitHubLink: string
        liveLink: string
    }
}
