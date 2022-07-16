export const BASE_URL = "http://localhost:8000/"
export const BASE_URL_API = BASE_URL + "api"

export const BASE_URLS = {
    HOME: BASE_URL,
    TEXT_GROUPS: BASE_URL_API + "/text-groups",
    PROJECTS: BASE_URL_API + "/projects",
    MEDIA_GROUPS: BASE_URL_API + "/media-groups",
    BLOG: BASE_URL_API + "/blog",
}

export const API_ROUTE_URLS = {
    GET_TEXT_GROUPS_BY_PAGE: BASE_URLS.TEXT_GROUPS + "?page=",

    GET_PROJECTS: BASE_URLS.PROJECTS,

    GET_MEDIA_GROUPS_BY_PAGE: BASE_URLS.MEDIA_GROUPS + "?page=",

    GET_BLOGS_BY_PAGE: BASE_URLS.BLOG + "?page=",
    GET_BLOGS_BY_CATEGORY: BASE_URLS.BLOG + "/categories" + "?category=",
}
