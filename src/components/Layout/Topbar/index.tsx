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
        <>
            <div id="main-logo-icon" className="w-1/5 fixed z-10">
                <div className="flex-col-center h-40 h-24 h-32">
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

            <div id="sun-moon-icon" className="w-1/5 fixed z-10 right-0 mx-3">
                <div className="flex-col-center h-40 h-24 h-32">
                    <Icon onClick={toggleTheme} iconSize={EIconSizes.lg}>
                        <SunMoon />
                    </Icon>
                </div>
            </div>
        </>
    )
}

export default Topbar
