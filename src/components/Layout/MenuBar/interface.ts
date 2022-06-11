export enum Routes {
    HOME = "/",
    BLOGS = "/blogs",
    FUN = "/fun",
}

export enum RouteNames {
    HOME = "Home",
    BLOGS = "Blogs",
    FUN = "Fun",
}

export interface PageRoute {
    name: RouteNames
    route: Routes
}
