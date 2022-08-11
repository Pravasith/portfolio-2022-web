import { EMenuActions } from "@utils/reducers/menuReducer/interface"
import { EThemeActions } from "@utils/reducers/themeReducer/interface"

export type Action =
    | { type: EThemeActions }
    | { type: EMenuActions; payload: boolean }
// | { type: "success"; results: HNResponse }
// | { type: "failure"; error: string }
