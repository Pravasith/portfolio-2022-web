import React, { useReducer } from "react"

import {
    ThemeContext,
    themeContextDefaultValues,
} from "@utils/contexts/themeContext"

import ContactBar from "./ContactBar"
import Topbar from "./Topbar"
import { themeReducer } from "@utils/reducers"

const Layout: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(
        themeReducer,
        themeContextDefaultValues
    )

    return (
        <>
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

                <section>{children}</section>

                <aside>{/* Navbar */}</aside>

                <footer>
                    {/* Some footer stuff,
                maybe a game */}
                </footer>
            </ThemeContext.Provider>
        </>
    )
}

export default Layout
