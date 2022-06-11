import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { EThemeActions } from "@utils/reducers/interface"
import { useContext } from "react"

const useToggleTheme = () => {
    const { state, dispatch } = useContext(ThemeContext)

    const toggleTheme = () => {
        state?.currentTheme &&
            dispatch &&
            dispatch({
                type:
                    state.currentTheme === EThemes.LIGHT
                        ? EThemeActions.DARK_THEME_SELECTED
                        : EThemeActions.LIGHT_THEME_SELECTED,
            })
    }

    return toggleTheme
}

export default useToggleTheme
