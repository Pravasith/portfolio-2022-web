import { setDarkTheme, setLightTheme } from "@utils/actions/themeActions"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { useContext } from "react"

const useToggleTheme = () => {
    const { state, dispatch } = useContext(ThemeContext)

    const toggleTheme = () => {
        if (state?.currentTheme && dispatch) {
            state.currentTheme === EThemes.LIGHT
                ? setDarkTheme(dispatch)
                : setLightTheme(dispatch)

            localStorage.setItem(
                "theme",
                state.currentTheme === EThemes.LIGHT
                    ? EThemes.DARK
                    : EThemes.LIGHT
            )
        }
    }

    return toggleTheme
}

export default useToggleTheme
