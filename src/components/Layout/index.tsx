import React from "react"

import ContactLinks from "./ContactLinks"
import Topbar from "./Topbar"

const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <>
            <header>
                {/* Things that go in the top bar, like Navbar */}
                {/* Banners, notification strips... etc. */}
                <Topbar />
            </header>

            <aside>
                {/* Twitter Stuff */}
                <ContactLinks />
            </aside>

            <section>{children}</section>

            <aside>{/* Navbar */}</aside>

            <footer>
                {/* Some footer stuff,
                maybe a game */}
            </footer>
        </>
    )
}

export default Layout
