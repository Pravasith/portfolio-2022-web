import { EThemeActions } from "./interface"
import {
    EThemes,
    ThemeContextState,
} from "@utils/contexts/themeContext/interface"
import { Action } from "@utils/reducers/interface"

export const themeReducer = (
    _state: ThemeContextState,
    action: Action
): ThemeContextState => {
    switch (action.type) {
        case EThemeActions.LIGHT_THEME_SELECTED:
            return { currentTheme: EThemes.LIGHT }

        case EThemeActions.DARK_THEME_SELECTED:
            return { currentTheme: EThemes.DARK }

        default:
            throw new Error("Theme context error")
    }
}
