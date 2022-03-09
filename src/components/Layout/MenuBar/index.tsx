import { EColorClassNames } from "@lib/themes/colors"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import gsap from "gsap"
import Link from "next/link"
import { useContext } from "react"

enum EFonts {
    CALIBRE = "Calibre",
    CALIBRE_BOLD = "Copyright Klim Type Foundry",
}

enum EMouseAction {
    ENTER = "ENTER",
    LEAVE = "LEAVE",
}

const MenuBar = () => {
    const pages = ["Home", "Blogs", "Fun"]

    const { state } = useContext(ThemeContext)

    const handleHover = (mouseAction: EMouseAction, index: number) => {
        const mouseEntered = mouseAction === EMouseAction.ENTER

        gsap.to(`#menuBar-item-${index} .menuBar-item-background`, {
            scaleX: Number(mouseEntered),
            duration: 0.2,
        })

        gsap.to(`#menuBar-item-${index} a`, {
            fontFamily: mouseEntered ? EFonts.CALIBRE_BOLD : EFonts.CALIBRE,
            duration: 0.2,
        })
    }

    return (
        <div className="w-1/5 fixed bottom-1/4 right-0">
            <ul className="flex-col-center">
                {pages.map((item, index) => (
                    <li
                        key={"whore-menu-" + index}
                        className="my-2 cursor-pointer"
                    >
                        <Link href="/" passHref>
                            <div
                                onMouseEnter={() =>
                                    handleHover(EMouseAction.ENTER, index)
                                }
                                onMouseLeave={() =>
                                    handleHover(EMouseAction.LEAVE, index)
                                }
                                className="relative"
                                id={`menuBar-item-${index}`}
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

                                <a className={`px-3 text-lg`}>{item}</a>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuBar
