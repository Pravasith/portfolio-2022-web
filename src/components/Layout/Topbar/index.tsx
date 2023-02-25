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
        <div
            className={`
                w-full flex flex-row justify-between overflow-x-clip
                
            `}
        >
            <div
                id="main-logo-icon"
                className={`
                    w-1/5 z-20 ${state?.showMenu ? "fixed" : "h-32"}
                    tablet:fixed tablet:w-[15%] tablet:mx-2
                    laptop:w-1/5
                    desktop:w-[15%] 
                `}
            >
                <div
                    className={`
                        flex-col-center h-24
                        tablet:flex-col-center tablet:h-32
                        tv:h-52
                    `}
                >
                    <Link passHref href={"/"}>
                        <Icon
                            iconSize={EIconSizes.sm}
                            iconBackground={EColors.ICON_BACKGROUND_YELLOW_100}
                        >
                            <MainLogo />
                        </Icon>
                    </Link>
                </div>
            </div>

            <div
                id="sun-moon-icon"
                className={`
                    w-1/5 z-20 right-0 mx-3 
                    ${state?.showMenu ? "fixed" : ""}

                    tablet:fixed tablet:mx-0 tablet:w-[15%]

                    laptop:w-1/5

                    desktop:w-[15%] 
                `}
            >
                <div
                    className={`
                        flex-col-center h-24
                        tablet:flex-col-center tablet:h-32
                        tv:h-52
                    `}
                >
                    <Icon onClick={toggleTheme} iconSize={EIconSizes.lg}>
                        <SunMoon />
                    </Icon>
                </div>
            </div>
        </div>
    )
}

export default Topbar
