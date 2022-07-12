export type UserDetailsType = {
    username: string
    fullName: string
    profileImage: string
}

export type MetaDataType = {
    pageTitle: string
    ogSiteName: string
    ogTitle: string
    ogType: string
    ogUrl: string
    twitterCreator: string
    description: string
    twitterDescription: string
    ogDescription: string
    ogImageAlt: string
    twitterImageAlt: string
    ogImage: string
    twitterImage: string
}

export interface BlogsType {
    metaData: MetaDataType
    page: string
    id: string
    title: string
    timestamp: Date
    thumbnail: string
    userDetails: UserDetailsType
    tags: string[]
}

export enum BlogContentTypes {
    MEDIA_BLOCK = "MEDIA_BLOCK",
    TEXT_BLOCK = "TEXT_BLOCK",
}
