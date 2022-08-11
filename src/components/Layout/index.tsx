import React, { useEffect, useReducer, useRef } from "react"

import {
    ThemeContext,
    themeContextDefaultValues,
} from "@utils/contexts/themeContext"

import { themeReducer } from "@utils/reducers"
import { EThemes } from "@utils/contexts/themeContext/interface"
import gsap from "gsap"

import FontsCopyright from "./FontsCopyright"

import { EThemeActions } from "@utils/reducers/interface"
import { EColors } from "@lib/themes/interface"
import Topbar from "./Topbar"

const Layout: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(
        themeReducer,
        themeContextDefaultValues
    )

    const background = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme") as EThemes

        localStorageTheme &&
            dispatch({
                type:
                    localStorageTheme === EThemes.LIGHT
                        ? EThemeActions.LIGHT_THEME_SELECTED
                        : EThemeActions.DARK_THEME_SELECTED,
            })
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
        <div ref={background} className={`absolute z-10 w-full`}>
            <ThemeContext.Provider
                value={{
                    state,
                    dispatch,
                }}
            >
                <header>
                    {/* Things that go in the top bar, like Navbar */}
                    {/* Banners, notification strips... etc. */}
                    <Topbar />
                </header>

                <aside>
                    {/* Twitter Stuff */}
                    {/* <ContactBar /> */}
                    <FontsCopyright />
                </aside>

                <article className="md:pt-[100px]">
                    {/* Children */}
                    {children}
                </article>

                <aside>
                    {/* Navbar */}
                    {/* <MenuBar /> */}
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
