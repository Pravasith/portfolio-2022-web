import { ContextProps } from "@utils/contexts/interface"
import { createContext } from "react"
import { EThemes, ThemeContextState } from "./interface"

export const themeContextDefaultValues: ThemeContextState = {
    currentTheme: EThemes.DARK,
}

export const ThemeContext = createContext<ContextProps<ThemeContextState>>({
    state: themeContextDefaultValues,
    dispatch: null,
})
