import { EIconSizes } from "@components/UI/Icons/interface"
import { Icon } from "@components/UI/Icons"

import TopbarIcons from "./Icons"

import useToggleTheme from "@hooks/useToggleTheme"
import Link from "next/link"
import { EColors } from "@lib/themes/interface"
import { useContext } from "react"
import { MenuContext } from "@utils/contexts/menuContext"

const { SunMoon, MainLogo } = TopbarIcons

const Topbar = () => {
    const toggleTheme = useToggleTheme()
    const { state } = useContext(MenuContext)

    return (
        <div className="w-full flex flex-row justify-between overflow-x-clip">
            <div
                id="main-logo-icon"
                className={`w-1/5 z-20 ${
                    state?.showMenu ? "fixed" : "h-32"
                } md:fixed`}
            >
                <div className="flex-col-center h-32">
                    <Link href={"/"}>
                        <a>
                            <Icon
                                iconSize={EIconSizes.sm}
                                iconBackground={
                                    EColors.ICON_BACKGROUND_YELLOW_100
                                }
                            >
                                <MainLogo />
                            </Icon>
                        </a>
                    </Link>
                </div>
            </div>

            <div
                id="sun-moon-icon"
                className={`w-1/5 z-20 right-0 mx-3 ${
                    state?.showMenu ? "fixed" : ""
                } md:fixed`}
            >
                <div className="flex-col-center h-32">
                    <Icon onClick={toggleTheme} iconSize={EIconSizes.lg}>
                        <SunMoon />
                    </Icon>
                </div>
            </div>
        </div>
    )
}

export default Topbar
