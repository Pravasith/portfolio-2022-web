import { ContextProps } from "@utils/contexts/interface"
import { createContext } from "react"
import { MenuContextState } from "./interface"

export const menuContextDefaultValues: MenuContextState = {
    showMenu: false,
}

export const MenuContext = createContext<ContextProps<MenuContextState>>({
    state: menuContextDefaultValues,
    dispatch: null,
})
