import { EIconSizes } from "@components/UI/Icons/interface"
import { Icon } from "@components/UI/Icons"

import TopbarIcons from "./Icons"

import { EColors } from "@lib/themes/colors"
import useToggleTheme from "@hooks/useToggleTheme"

const { SunMoon, MainLogo } = TopbarIcons

const Topbar = () => {
    const toggleTheme = useToggleTheme()

    return (
        <>
            <div className="w-1/5 fixed z-10">
                <div className="flex-col-center">
                    <div className="my-16">
                        <Icon
                            iconSize={EIconSizes.sm}
                            iconBackground={EColors.ICON_BACKGROUND_YELLOW_100}
                        >
                            <MainLogo />
                        </Icon>
                    </div>
                </div>
            </div>
            <div className="w-1/5 fixed z-10 right-0">
                <div className="flex-col-center">
                    <div className="my-10">
                        <Icon onClick={toggleTheme} iconSize={EIconSizes.lg}>
                            <SunMoon />
                        </Icon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
