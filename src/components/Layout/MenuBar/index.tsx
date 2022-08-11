import { EColorClassNames, ETextColorClassNames } from "@lib/themes/interface"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import gsap from "gsap"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import {
    EFonts,
    EMouseAction,
    PageRoute,
    RouteNames,
    Routes,
} from "./interface"

const MenuBar = () => {
    const pages: PageRoute[] = [
        {
            route: Routes.HOME,
            name: RouteNames.HOME,
        },
        {
            route: Routes.FUN,
            name: RouteNames.FUN,
        },
        {
            route: Routes.BLOGS,
            name: RouteNames.BLOGS,
        },
    ]

    const router = useRouter()

    const highLightCurrentRoute = () => {
        const routeNameToHighlight = pages.find(
            page => page.route === router.asPath
        )

        if (routeNameToHighlight?.name) {
            gsap.to(
                `#menuBar-item-${routeNameToHighlight.name} .menuBar-item-background`,
                {
                    scaleX: 1,
                    duration: 0.2,
                }
            )

            gsap.to(`#menuBar-item-${routeNameToHighlight.name} p`, {
                fontFamily: EFonts.CALIBRE_BOLD,
                duration: 0.2,
            })
        }
    }

    useEffect(() => {
        highLightCurrentRoute()
    }, [])

    const { state } = useContext(ThemeContext)

    const handleHover = (mouseAction: EMouseAction, pageName: RouteNames) => {
        const mouseEntered = mouseAction === EMouseAction.ENTER

        gsap.to(`#menuBar-item-${pageName} .menuBar-item-background`, {
            scaleX: Number(mouseEntered),
            duration: 0.2,
        })

        !mouseEntered && highLightCurrentRoute()
    }

    return (
        <div className="z-10 md:fixed md:bottom-1/4 md:right-0 md:w-1/5">
            <ul className="flex-col-center">
                {pages.map((page, index) => (
                    <Link
                        href={page.route}
                        // passHref
                        key={"whore-menu-" + index}
                    >
                        <a>
                            <li className="my-2 cursor-pointer">
                                <div
                                    onMouseEnter={() =>
                                        handleHover(
                                            EMouseAction.ENTER,
                                            page.name
                                        )
                                    }
                                    onMouseLeave={() =>
                                        handleHover(
                                            EMouseAction.LEAVE,
                                            page.name
                                        )
                                    }
                                    className="relative"
                                    id={`menuBar-item-${page.name}`}
                                >
                                    <div
                                        className={`
                                        menuBar-item-background
                                        absolute -z-10 w-full rounded origin-center h-2/3 top-1/2 scale-x-0
                                        ${
                                            state?.currentTheme ===
                                            EThemes.LIGHT
                                                ? EColorClassNames.ICON_BACKGROUND_YELLOW_100
                                                : EColorClassNames.ICON_BACKGROUND_ORANGE_200
                                        }
                                    `}
                                    ></div>

                                    <p
                                        className={`px-3 text-xl  ${
                                            state?.currentTheme ===
                                            EThemes.LIGHT
                                                ? ETextColorClassNames.LIGHT_THEME_TEXT_100
                                                : ETextColorClassNames.DARK_THEME_TEXT_100
                                        }`}
                                    >
                                        {page.name}
                                    </p>
                                </div>
                            </li>
                        </a>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default MenuBar
