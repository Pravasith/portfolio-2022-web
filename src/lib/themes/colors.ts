// These colors are defined in tailwind theme config.
// Check tailwind.config.js

import { EThemes } from "@utils/contexts/themeContext/interface"
import { EColors } from "./interface"

export const getColors = (theme: EThemes) => {
    const colors = {
        lightTheme: EColors.LIGHT_THEME_BACKGROUND_100,
        darkTheme: EColors.DARK_THEME_BACKGROUND_100,
    }

    return theme === EThemes.LIGHT ? colors.lightTheme : colors.darkTheme
}
