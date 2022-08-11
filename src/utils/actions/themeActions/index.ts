import { Action } from "@utils/reducers/interface"
import { EThemeActions } from "@utils/reducers/themeReducer/interface"
import { Dispatch } from "react"

export const setDarkTheme = (dispatch: Dispatch<Action>) => {
    dispatch({
        type: EThemeActions.DARK_THEME_SELECTED,
    })
}

export const setLightTheme = (dispatch: Dispatch<Action>) => {
    dispatch({
        type: EThemeActions.LIGHT_THEME_SELECTED,
    })
}
