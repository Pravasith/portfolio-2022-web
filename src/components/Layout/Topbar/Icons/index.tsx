import { useContext, useEffect } from "react"
import gsap from "gsap"

import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"

const SunMoon = () => {
    const { state } = useContext(ThemeContext)

    const toggleTheme = () => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.in" },
        })

        const colors = getColors(
            state?.currentTheme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK
        )

        tl.to("#b-0", { fill: colors.b0, duration: 1 })
        tl.to("#b-1", { fill: colors.b1, duration: 1 }, "-0.125")
        tl.to("#b-2", { fill: colors.b2, duration: 1 }, "-0.125")
        tl.to("#b-3", { fill: colors.b3, duration: 1 }, "-0.125")

        tl.to("#sunmoon-gradient .stop-0", {
            stopColor: colors.sunmoonGradient.stopColor1,
            duration: 0.5,
        })

        tl.to(
            "#sunmoon-gradient .stop-1",
            {
                stopColor: colors.sunmoonGradient.stopColor2,
                duration: 0.5,
            },
            "<"
        )

        tl.to(
            ["#sunmoon-lines .line-0", "#sunmoon-lines .line-1"],
            {
                stroke: colors.sunmoonLines,
                duration: 0.5,
            },
            "<"
        )
    }

    useEffect(() => {
        toggleTheme()
    }, [state?.currentTheme, toggleTheme])

    const getColors = (theme: EThemes) => {
        const colors = {
            lightTheme: {
                b3: "#FEFCBB",
                b2: "#FFF35F",
                b1: "#FFEC61",
                b0: "#FFED85",

                sunmoonLines: "#F7931E",
                sunmoonGradient: {
                    stopColor1: "#F15A24",
                    stopColor2: "#FCEE21",
                },
            },

            darkTheme: {
                b3: "#71E1FF",
                b2: "#A4DFFF",
                b1: "#88DBFF",
                b0: "#8DD1FF",

                sunmoonLines: "#60B2EA",
                sunmoonGradient: {
                    stopColor1: "#29ABE2",
                    stopColor2: "#B3EBFF",
                },
            },
        }

        return theme === EThemes.LIGHT ? colors.lightTheme : colors.darkTheme
    }

    return (
        <>
            <g id="background">
                <path
                    id="b-3"
                    fill="#FEFCBB"
                    d="M100.4 39.2H.4v-8.7C.4 13.8 13.9.3 30.6.3h39.5c16.7 0 30.2 13.5 30.2 30.2v8.7z"
                ></path>

                <path
                    id="b-2"
                    fill="#FFF35F"
                    d="M0.2 36.1H100V56.2H0.2z"
                ></path>

                <path
                    id="b-1"
                    fill="#FFEC61"
                    d="M0.2 55.2H100V70.2H0.2z"
                ></path>

                <path
                    id="b-0"
                    fill="#FFED85"
                    d="M72.2 100.2H28.1C12.7 100.2.3 87.7.3 72.4v-3h99.8v3c0 15.3-12.5 27.8-27.9 27.8z"
                ></path>
            </g>

            <g
                id="sunmoon-lines"
                fill="none"
                stroke="#F7931E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2.2"
            >
                <path className="line-1" d="M35.4 60.2L65.4 60.2"></path>
                <path className="line-0" d="M41.5 65.9L59.1 65.9"></path>
            </g>

            <g id="sunmoon-gradient">
                <linearGradient
                    id="SVGID_1_"
                    x1="50.431"
                    x2="50.431"
                    y1="23.24"
                    y2="59.307"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        className="stop-0"
                        offset="0.196"
                        stopColor="#F15A24"
                    ></stop>
                    <stop
                        className="stop-1"
                        offset="1"
                        stopColor="#FCEE21"
                    ></stop>
                </linearGradient>
                <path
                    fill="url(#SVGID_1_)"
                    d="M33.3 55.4c-.6-1.8-.9-3.7-.9-5.7 0-10 8.1-18 18-18s18 8.1 18 18c0 1.9-.3 3.7-.8 5.4"
                ></path>
            </g>
        </>
    )
}

const MainLogo = () => (
    <>
        <path
            fill="#F15A24"
            d="M51.3,64L51.3,64l-34.2,0V32.7h0.2c0-0.2,0-0.4,0-0.6c0-17.7,14.9-32,33.2-32s33.2,14.3,33.2,32
C83.7,49.5,69.3,63.6,51.3,64z"
        />
        <path
            fill="#348BD1"
            d="M17.5,86.7c0.1,7.4,6.1,13.3,13.5,13.3s13.4-5.9,13.5-13.3h0l0-14.4l-27,0L17.5,86.7L17.5,86.7z"
        />
    </>
)

const TopbarIcons = { SunMoon, MainLogo }
export default TopbarIcons
