import { EIconSizes } from "@components/UI/Icons/interface"
import { Icon } from "@components/UI/Icons"

import TopbarIcons from "./Icons"

import useToggleTheme from "@hooks/useToggleTheme"
import Link from "next/link"
import { EColors } from "@lib/themes/interface"

const { SunMoon, MainLogo } = TopbarIcons

const Topbar = () => {
    const toggleTheme = useToggleTheme()

    return (
        <div className="w-full flex flex-row justify-between">
            <div id="main-logo-icon" className="w-1/5 z-10 md:fixed">
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
                className="w-1/5  z-10 right-0 mx-3 md:fixed"
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
