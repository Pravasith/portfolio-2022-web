export const BASE_URL = "http://localhost:8000/"
export const BASE_URL_API = BASE_URL + "api"

export const BASE_URLS = {
    HOME: BASE_URL,
    TEXT_GROUPS: BASE_URL_API + "/textgroups",
    PROJECTS: BASE_URL_API + "/projects",
    MEDIA: BASE_URL_API + "/media",
}

export const API_ROUTE_URLS = {
    GET_TEXT_BLOCKS: BASE_URLS.TEXT_GROUPS,
    GET_TEXT_BLOCKS_BY_PAGE: BASE_URLS.TEXT_GROUPS + "?page=",
    GET_PROJECTS: BASE_URLS.PROJECTS,
    GET_MEDIA_BLOCKS_BY_PAGE: BASE_URLS.MEDIA + "?page=",
}
