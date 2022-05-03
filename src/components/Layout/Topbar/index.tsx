import { EIconSizes } from "@components/UI/Icons/interface"
import { Icon } from "@components/UI/Icons"

import TopbarIcons from "./Icons"
import { useContext } from "react"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { EThemeActions } from "@utils/reducers/interface"
import { EColors } from "@lib/themes/colors"

const { SunMoon, MainLogo } = TopbarIcons

const Topbar = () => {
    const { state, dispatch } = useContext(ThemeContext)

    const changeTheme = () => {
        state?.currentTheme &&
            dispatch &&
            dispatch({
                type:
                    state.currentTheme === EThemes.LIGHT
                        ? EThemeActions.DARK_THEME_SELECTED
                        : EThemeActions.LIGHT_THEME_SELECTED,
            })
    }

    return (
        <>
            <div className="w-1/5 fixed z-10">
                <div className="flex-col-center">
                    <div className="my-10">
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
                        <Icon onClick={changeTheme} iconSize={EIconSizes.lg}>
                            <SunMoon />
                        </Icon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
