import React, { useEffect, useReducer, useRef } from "react"

import gsap from "gsap"

import FontsCopyright from "@components/Layout/FontsCopyright"
import Topbar from "@components/Layout/Topbar"
import PhoneMenu from "@components/Layout/PhoneMenu"
import MenuBar from "@components/Layout/MenuBar"
import ContactBar from "@components/Layout/ContactBar"

import { EColors } from "@lib/themes/interface"

import { setDarkTheme, setLightTheme } from "@utils/actions/themeActions"

import {
    MenuContext,
    menuContextDefaultValues,
} from "@utils/contexts/menuContext"

import {
    ThemeContext,
    themeContextDefaultValues,
} from "@utils/contexts/themeContext"

import { EThemes } from "@utils/contexts/themeContext/interface"

import { menuReducer } from "@utils/reducers/menuReducer"
import { themeReducer } from "@utils/reducers/themeReducer"

import useMobileScreen from "@hooks/useMobileScreen"

const Layout: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(
        themeReducer,
        themeContextDefaultValues
    )

    const [menuState, menuDispatch] = useReducer(
        menuReducer,
        menuContextDefaultValues
    )

    const background = useRef<HTMLDivElement>(null)

    const isMobile = useMobileScreen()

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme") as EThemes

        localStorageTheme &&
            localStorageTheme === EThemes.LIGHT &&
            setLightTheme(dispatch)

        localStorageTheme &&
            localStorageTheme === EThemes.DARK &&
            setDarkTheme(dispatch)
    }, [])

    useEffect(() => {
        const isThemeLight = state.currentTheme === EThemes.LIGHT

        gsap.to(background.current, {
            backgroundColor: isThemeLight
                ? EColors.LIGHT_THEME_BACKGROUND_100
                : EColors.DARK_THEME_BACKGROUND_200,
        })
    }, [state.currentTheme])

    return (
        <div ref={background} className="absolute z-10 w-full">
            <ThemeContext.Provider
                value={{
                    state,
                    dispatch,
                }}
            >
                <MenuContext.Provider
                    value={{
                        state: menuState,
                        dispatch: menuDispatch,
                    }}
                >
                    <header>
                        {/* Things that go in the top bar, like Navbar */}
                        {/* Banners, notification strips... etc. */}
                        {isMobile && <PhoneMenu />}
                        <Topbar />
                    </header>
                </MenuContext.Provider>

                <aside>
                    {/* Twitter Stuff */}
                    {!isMobile && <ContactBar />}
                    <FontsCopyright />
                </aside>

                <article
                    className={`
                        tablet:pt-[5rem]
                        laptop:pt-[3rem]
                        desktop:pt-[0]
                    `}
                >
                    {/* Children */}
                    {children}
                </article>

                <aside>
                    {/* Navbar */}
                    {!isMobile && <MenuBar />}
                </aside>

                <footer>
                    {/* Some footer stuff, */}
                    {/* maybe a game */}
                </footer>
            </ThemeContext.Provider>
        </div>
    )
}

export default Layout
