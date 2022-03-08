import React, { useEffect, useReducer, useRef } from "react"

import {
    ThemeContext,
    themeContextDefaultValues,
} from "@utils/contexts/themeContext"

import ContactBar from "./ContactBar"
import Topbar from "./Topbar"
import { themeReducer } from "@utils/reducers"
import { EThemes } from "@utils/contexts/themeContext/interface"
import gsap from "gsap"
import { EColors } from "@lib/themes/colors"

const Layout: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(
        themeReducer,
        themeContextDefaultValues
    )

    const background = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.to(background.current, {
            backgroundColor:
                state.currentTheme === EThemes.LIGHT
                    ? EColors.LIGHT_SCREEN_BACKGROUND_100
                    : EColors.DARK_SCREEN_BACKGROUND_100,
        })
    }, [state.currentTheme])

    return (
        <div ref={background}>
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
                    <ContactBar />
                </aside>

                <section>
                    {
                        // CHILDREN GO HERE
                        children
                    }
                </section>

                <aside>{/* Navbar */}</aside>

                <footer>
                    {/* Some footer stuff,
                maybe a game */}
                </footer>
            </ThemeContext.Provider>
        </div>
    )
}

export default Layout
