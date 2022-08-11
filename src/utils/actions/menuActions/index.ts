import { EMenuActions } from "@utils/reducers/menuReducer/interface"
import { Action } from "@utils/reducers/interface"
import { Dispatch } from "react"

export const showMenuScreen = (
    dispatch: Dispatch<Action>,
    showMenu: boolean
) => {
    dispatch({
        type: EMenuActions.SHOW_MENU,
        payload: showMenu,
    })
}
