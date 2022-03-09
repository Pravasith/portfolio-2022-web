import { useContext, useEffect, useRef } from "react"
import gsap from "gsap"

import { EColors } from "@lib/themes/colors"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"

const getColors = (theme: EThemes) => {
    const colors = {
        lightTheme: EColors.LIGHT_SCREEN_BACKGROUND_100,
        darkTheme: EColors.DARK_SCREEN_BACKGROUND_100,
    }

    return theme === EThemes.LIGHT ? colors.lightTheme : colors.darkTheme
}

const TwitterIcon = () => {
    const { state } = useContext(ThemeContext)

    const iconPath = useRef<SVGGElement>(null)
    const qIconPath = gsap.utils.selector(iconPath)

    useEffect(() => {
        const toggleTheme = () => {
            const colors = getColors(
                state?.currentTheme === EThemes.DARK
                    ? EThemes.LIGHT
                    : EThemes.DARK
            )

            gsap.to(qIconPath("path"), {
                fill: colors,
            })
        }

        toggleTheme()
    }, [state?.currentTheme])

    return (
        <g ref={iconPath}>
            <path
                fill="#fafafa"
                d="M-0.4,81.6c10.8,0.8,20.6-1.8,29.7-8.6c-9.3-1.2-15.7-5.6-19.2-14.6c3.1,0,5.7,0,8.4,0
    c-9.6-3.8-15-10.4-15.7-20.8c2.9,0.8,5.6,1.5,8.4,2.3C2.6,30,0.7,20.9,5.9,12.2c11.3,12.9,25.4,20.5,42.6,21.6c0-2.1-0.1-3.8,0-5.6
    c0.4-8.5,4.7-14.6,12.3-18c7.4-3.3,14.8-2.6,21.2,2.6c2.3,1.9,4.3,2,6.7,1c2.8-1.2,5.7-2.3,8.8-3.6c-1.4,4.6-4.5,7.7-7.6,11.1
    c3.3-0.9,6.5-1.8,10-2.7c-0.3,0.6-0.5,1.1-0.9,1.5c-1.5,1.8-2.9,3.8-4.7,5.1C90.8,27.7,90.2,31,90,35c-1.4,25-19.1,50.8-49.5,55.2
    c-13.7,2-26.8,0-39-7c-0.5-0.3-1-0.6-1.5-1C-0.2,82.2-0.2,82-0.4,81.6z"
            />
        </g>
    )
}

const GithubIcon = () => {
    const { state } = useContext(ThemeContext)
    const iconPath = useRef<SVGGElement>(null)
    const qIconPath = gsap.utils.selector(iconPath)

    useEffect(() => {
        const toggleTheme = () => {
            const colors = getColors(
                state?.currentTheme === EThemes.DARK
                    ? EThemes.LIGHT
                    : EThemes.DARK
            )

            gsap.to(qIconPath("path"), {
                fill: colors,
            })
        }

        toggleTheme()
    }, [state?.currentTheme])

    return (
        <g ref={iconPath}>
            <path
                fill="#333333"
                d="M59.3,71.4c2.2-0.4,4.2-0.7,6.2-1.2c6-1.5,11-4.4,13.7-10.2c2.9-6,3.5-12.4,1.9-19
c-0.6-2.5-1.9-4.8-3.6-6.7c-0.5-0.5-0.6-1-0.4-1.7c1.2-3.9,0.8-7.7-0.6-11.5c-0.1-0.4-0.8-0.8-1.2-0.8c-2.4-0.1-4.6,0.7-6.7,1.7
c-1.8,0.9-3.6,2-5.4,3c-0.4,0.2-1,0.3-1.4,0.2c-7.8-1.9-15.7-1.9-23.5,0c-0.5,0.1-1.2-0.1-1.6-0.3c-3.3-2-6.5-3.8-10.4-4.5
c-0.1,0-0.2-0.1-0.3-0.1c-2-0.3-2.2-0.2-2.8,1.7c-1.1,3.6-1.3,7.2-0.1,10.9c0.1,0.3,0,0.8-0.2,1c-4.5,5.2-5.4,11.2-4.4,17.7
c0.3,2.3,0.9,4.6,1.7,6.8c2.5,6.5,7.7,10,14.3,11.7c2,0.5,4.1,0.8,6.3,1.3c-1.6,1.8-2.5,3.8-2.9,6.1c0,0.3-0.4,0.5-0.7,0.7
c-5.3,2.1-10.5,1.2-13.8-4.3c-1.5-2.6-3.7-4.5-6.7-5.1c-0.8-0.2-1.6-0.1-2.3,0c-1.1,0.2-1.2,0.8-0.5,1.6c0.3,0.4,0.7,0.7,1.2,1
c2.7,1.6,4.4,4,5.6,6.9c1.8,4.5,5.4,6.6,10,6.9c2.3,0.2,4.6-0.1,7.1-0.2c0,3,0.1,6.2,0,9.4c-0.1,1.6-1.8,2.4-3.7,1.8
c-4.2-1.4-8.2-3.3-11.9-5.9C6.9,79.8-0.7,65.3,0.1,46.8c1-22.9,17.8-41.7,40.4-46.1c25.9-5,51.2,10.8,57.9,36.3
c6.5,24.8-7.7,51.1-32.1,59.2c-2.5,0.8-3.9-0.2-3.9-2.8c0-4.2,0-8.3,0-12.5C62.5,77.5,61.8,74.2,59.3,71.4z"
            />
            <path
                fill="#333333"
                d="M32.4,79.8c0.4,0.4,0.7,0.7,1,0.9c-0.4,0.3-0.7,0.7-1.1,0.7c-0.3,0-0.6-0.4-0.9-0.7
C31.7,80.5,32,80.2,32.4,79.8z"
            />
            <path
                fill="#333333"
                d="M26.2,78.3c-0.5,0.4-0.9,0.7-1,0.7c-0.4-0.2-0.8-0.6-1.1-1c0,0,0.4-0.7,0.5-0.7
C25,77.5,25.4,77.8,26.2,78.3z"
            />
            <path
                fill="#333333"
                d="M28.3,79.2c0.4,0.5,0.7,0.8,1,1.2c-0.3,0.2-0.7,0.6-1,0.5c-0.4-0.1-0.7-0.6-1-0.9
C27.6,79.7,27.9,79.5,28.3,79.2z"
            />
            <path
                fill="#333333"
                d="M36.3,79.3c0.4,0.4,0.7,0.7,0.9,1c-0.4,0.3-0.8,0.6-1.2,0.7c-0.2,0.1-0.6-0.4-0.9-0.6
C35.5,80.1,35.8,79.8,36.3,79.3z"
            />
            <path
                fill="#333333"
                d="M22.6,76.5c-0.4-0.7-0.7-1-0.9-1.4c0-0.1,0.4-0.4,0.6-0.6c0.3,0.4,0.6,0.7,0.9,1.1
C23.2,75.7,22.9,76,22.6,76.5z"
            />
            <path
                fill="#333333"
                d="M20.2,71.6c0.4,0.5,0.7,0.9,0.9,1.3c0,0-0.4,0.5-0.5,0.4c-0.3-0.2-0.6-0.5-0.8-0.8
C19.7,72.4,19.9,72.1,20.2,71.6z"
            />
        </g>
    )
}

export const EmailIcon = () => {
    const { state } = useContext(ThemeContext)
    const iconPath = useRef<SVGGElement>(null)
    const qIconPath = gsap.utils.selector(iconPath)

    useEffect(() => {
        const toggleTheme = () => {
            const colors = getColors(
                state?.currentTheme === EThemes.DARK
                    ? EThemes.LIGHT
                    : EThemes.DARK
            )

            gsap.to(qIconPath("path"), {
                fill: colors,
            })
        }

        toggleTheme()
    }, [state?.currentTheme])

    return (
        <g ref={iconPath}>
            <path
                fill="#333333"
                d="M100,33.4c0,3.6,0,7,0,10.4c0,11.7,0,23.4,0,35.1c0,3.3-2.1,5.9-5.3,6.5c-0.5,0.1-0.9,0.1-1.4,0.1
    c-28.9,0-57.8,0-86.7,0c-3.9,0-6.7-2.8-6.7-6.7c0-15,0-29.9,0-44.9c0-0.2,0-0.3,0-0.7c1.7,1,3.3,2,4.9,3c12.5,7.7,25,15.3,37.4,23
    c1.7,1,3.4,2.1,5.1,3.1c1.7,1,3.5,1.1,5.2,0c12.4-7.6,24.7-15.1,37.1-22.7c3.3-2,6.6-4,9.9-6C99.6,33.6,99.8,33.6,100,33.4z"
            />
            <path
                fill="#333333"
                d="M50,14.4c14.4,0,28.8,0,43.3,0c3.9,0,6.7,2.8,6.8,6.7c0,0.5-0.2,0.8-0.6,1.1c-9.9,6-19.7,12.1-29.6,18.1
    c-6.4,3.9-12.8,7.8-19.2,11.8c-0.5,0.3-0.8,0.3-1.3,0C35.7,43.7,22.1,35.4,8.4,27c-2.7-1.6-5.4-3.3-8.1-4.9
    c-0.4-0.2-0.5-0.5-0.5-0.9c0-3.8,2.9-6.7,6.6-6.7C21,14.4,35.5,14.4,50,14.4z"
            />
        </g>
    )
}

const ContactBarIcons = { TwitterIcon, GithubIcon, EmailIcon }
export default ContactBarIcons
