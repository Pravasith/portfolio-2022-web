import { EMenuActions } from "./interface"
import { Action } from "@utils/reducers/interface"
import { MenuContextState } from "@utils/contexts/menuContext/interface"

export const menuReducer = (
    _state: MenuContextState,
    action: Action
): MenuContextState => {
    switch (action.type) {
        case EMenuActions.SHOW_MENU:
            return { showMenu: action.payload }

        default:
            throw new Error("Menu context error")
    }
}
