import React, { useEffect, useReducer, useRef } from "react"

import {
    ThemeContext,
    themeContextDefaultValues,
} from "@utils/contexts/themeContext"

import ContactBar from "./ContactBar"
import MenuBar from "./MenuBar"
import TopBar from "./TopBar"

import { themeReducer } from "@utils/reducers"
import { EThemes } from "@utils/contexts/themeContext/interface"
import gsap from "gsap"
import { EColors } from "@lib/themes/colors"
import FontsCopyright from "./FontsCopyright"

const Layout: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(
        themeReducer,
        themeContextDefaultValues
    )

    const background = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const isThemeLight = state.currentTheme === EThemes.LIGHT

        gsap.to(background.current, {
            backgroundColor: isThemeLight
                ? EColors.LIGHT_THEME_BACKGROUND_100
                : EColors.DARK_THEME_BACKGROUND_200,
        })

        gsap.to("h1, h2, h3, h4, h5, h6, p, a, li, span", {
            color: isThemeLight
                ? EColors.DARK_THEME_BACKGROUND_200
                : EColors.LIGHT_THEME_BACKGROUND_100,
        })
    }, [state.currentTheme])

    return (
        <div ref={background} className="h-screen">
            <ThemeContext.Provider
                value={{
                    state,
                    dispatch,
                }}
            >
                <header>
                    {/* Things that go in the top bar, like Navbar */}
                    {/* Banners, notification strips... etc. */}
                    <TopBar />
                </header>

                <aside>
                    {/* Twitter Stuff */}
                    <ContactBar />
                    <FontsCopyright />
                </aside>

                <section>
                    {/* Children */}
                    {children}
                </section>

                <aside>
                    {/* Navbar */}
                    <MenuBar />
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
