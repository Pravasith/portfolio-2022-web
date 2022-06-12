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

export enum EFonts {
    CALIBRE = "Calibre",
    CALIBRE_BOLD = "Calibre Bold",
}

export enum EMouseAction {
    ENTER = "ENTER",
    LEAVE = "LEAVE",
}
