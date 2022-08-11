import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"

import { useContext } from "react"

import MenuBar from "@components/Layout/MenuBar"
import Hamburger from "@components/Layout/PhoneMenu/Hamburger"
import { MenuContext } from "@utils/contexts/menuContext"
import ContactBar from "../ContactBar"

const PhoneMenu = () => {
    const { state: menuState } = useContext(MenuContext)
    const { state: themeState } = useContext(ThemeContext)

    return (
        <div className="w-full">
            <div
                className={`menu-items z-20 fixed w-screen h-screen transition ${
                    themeState?.currentTheme === EThemes.DARK
                        ? "bg-gray-800"
                        : "bg-gray-50"
                } ${
                    menuState?.showMenu ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex-col-center h-full w-full">
                    <div className="my-20">
                        <MenuBar />
                    </div>
                    <ContactBar />
                </div>
            </div>

            <div
                id="hamburger-menu"
                className="w-1/5 z-20 right-0 bottom-0 mx-3 fixed md:fixed"
            >
                <div className="flex-col-center h-32">
                    <Hamburger />
                </div>
            </div>
        </div>
    )
}

export default PhoneMenu
