export const BASE_URL = "http://localhost:8000/"
export const BASE_URL_API = BASE_URL + "api"

export const BASE_URLS = {
    HOME: BASE_URL,
    TEXT_BLOCKS: BASE_URL_API + "/textblocks",
}

export const API_ROUTE_URLS = {
    CREATE_TEXT_BLOCK: BASE_URLS.TEXT_BLOCKS + "/create",
    GET_TEXT_BLOCKS: BASE_URLS.TEXT_BLOCKS,
    GET_TEXT_BLOCKS_BY_TYPE: BASE_URLS.TEXT_BLOCKS + "?type=",
}
