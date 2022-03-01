import React from "react"

const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <>
            <header>
                {/* Logo */}
                {/* Theme Toggle button */}
            </header>

            <aside>{/* Twitter Stuff */}</aside>

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
