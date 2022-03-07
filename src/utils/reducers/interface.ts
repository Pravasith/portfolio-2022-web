export enum EThemeActions {
    LIGHT_THEME_SELECTED = "LIGHT_THEME_SELECTED",
    DARK_THEME_SELECTED = "DARK_THEME_SELECTED",
}

export type Action = { type: EThemeActions }
// | { type: "success"; results: HNResponse }
// | { type: "failure"; error: string }
