// import useScrollTrigger from "@hooks/useScrollTrigger"

import { ThemeContext } from "@utils/contexts/themeContext"

import React, { useContext, useEffect, useRef } from "react"
import { toggleTheme } from "../factories"

interface CurvedTextProps {
    isDev?: boolean
}

export const CurvedText = ({ isDev }: CurvedTextProps) => {
    const getText = () => {
        const freelanceWords = [
            "GRAPHICS",

            "DESIGN",

            "ONLINE",
            "LOGO",
            "E COMMERCE",

            "DESIGN",
            "3D WESBSITES",
            "VISUAL DESIGN",
            "SEO",
            "BRAND",
            "UI/UX",
        ]

        const devWords = [
            "NODE.JS",

            "AWS",

            "POSTGRES",

            "JAVA",

            "NEXT.JS",
            "WEBGL",
            "REACT.JS",
            "SPRING BOOT",
            "GRAPH QL",
            "MONGODB",
            "DOCKER",
        ]

        return (isDev ? devWords : freelanceWords).map((word, i) => {
            if (i % 2 === 0) {
                return (
                    <tspan
                        className="curlyTextBold"
                        fontSize={"1.75rem"}
                        fontStretch={"1rem"}
                        key={"word" + i}
                    >
                        &nbsp;{word}&nbsp;&nbsp;
                    </tspan>
                )
            } else
                return (
                    <tspan fontSize={"1.25rem"} key={"word" + i}>
                        &nbsp;{word}&nbsp;&nbsp;
                    </tspan>
                )
        })
    }

    const curvedText1 = useRef<SVGTextPathElement>(null)

    const { state } = useContext(ThemeContext)
    const iconPath = useRef<SVGGElement>(null)

    useEffect(() => {
        if (iconPath.current && state?.currentTheme)
            toggleTheme(iconPath.current, state.currentTheme)
    }, [state?.currentTheme])

    // useScrollTrigger(
    //     gsapX => {
    //         if (curvedText1.current) {
    //             const scrollTrigger = {
    //                 trigger: ".section-2-container",
    //                 start: "top top",
    //                 end: "bottom 25%",
    //                 // markers: true,
    //                 scrub: 0.5,
    //                 pin: true,
    //             }

    //             gsapX.to(curvedText1.current, {
    //                 scrollTrigger,
    //                 attr: { startOffset: "50%" },
    //                 yoyo: true,
    //                 duration: 5,
    //             })
    //         }
    //     },
    //     [curvedText1.current]
    // )

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 563.69 599.8"
        >
            <g>
                <g id="text-curve-3" strokeMiterlimit="10" strokeWidth="7">
                    <path
                        fill="#FEFCBB"
                        stroke="#FCEE21"
                        d="M186.97 322.27s4.8-27.44-13.31-38.72c-18.1-11.28-19.51-28.09-16.24-38.91s3.46-18.52-9.78-34.22-.15-29.81 8.69-44.55c8.84-14.74 5.63-57.05 58.2-63.46s76.92-19.23 118.59 12.18 66.17 57.5 57.12 81.95-32.84 47.41-28.95 86.89-2.12 54.92-32.77 59.7-30.05-19.44-56.31.04c-26.26 19.49-39.15 18.84-48.73 8.27-9.59-10.58-44.84 2.24-36.51-29.17z"
                    ></path>
                    <path
                        fill="none"
                        stroke="#0FF"
                        d="M167.59 345.44s5.96-34.08-16.53-48.09c-22.48-14.01-24.23-34.89-20.17-48.33 4.06-13.44 4.3-23-12.14-42.5s-.18-37.02 10.8-55.33c10.98-18.31 7-70.85 72.28-78.82s95.53-23.88 147.28 15.13 82.18 71.41 70.94 101.79-40.78 58.88-35.96 107.92-2.63 68.21-40.7 74.15c-38.07 5.94-37.32-24.15-69.94.05s-48.62 23.4-60.52 10.27c-11.9-13.15-55.69 2.77-45.34-36.24z"
                    ></path>
                    <path
                        fill="#FF6A52"
                        stroke="#ED1C24"
                        d="M215.54 288.13s3.09-17.65-8.56-24.91c-11.65-7.26-12.55-18.07-10.45-25.03 2.1-6.96 2.23-11.91-6.29-22.01-8.52-10.1-.09-19.18 5.59-28.66 5.69-9.48 3.62-36.7 37.44-40.82 33.81-4.12 49.48-12.37 76.29 7.83s42.57 36.99 36.75 52.72c-5.82 15.73-21.12 30.5-18.63 55.9 2.5 25.4-1.36 35.33-21.08 38.41-19.72 3.08-19.33-12.51-36.22.03-16.9 12.53-25.18 12.12-31.35 5.32-6.17-6.83-28.85 1.42-23.49-18.78z"
                    ></path>
                    <path
                        fill="#FF6A52"
                        stroke="#ED1C24"
                        d="M233.2 267.02s2.03-11.6-5.63-16.37-8.25-11.88-6.87-16.45c1.38-4.58 1.46-7.83-4.13-14.47s-.06-12.6 3.68-18.84 2.38-24.12 24.61-26.83 32.52-8.13 50.14 5.15c17.62 13.28 27.98 24.31 24.15 34.65-3.83 10.34-13.88 20.05-12.24 36.74s-.9 23.22-13.86 25.24-12.7-8.22-23.81.02-16.55 7.97-20.6 3.5c-4.06-4.48-18.96.94-15.44-12.34z"
                    ></path>
                    <path
                        fill="#FF6A52"
                        stroke="#ED1C24"
                        d="M247.59 249.82s1.17-6.67-3.24-9.42-4.75-6.83-3.95-9.46c.79-2.63.84-4.5-2.38-8.32s-.04-7.25 2.11-10.83c2.15-3.59 1.37-13.87 14.15-15.43 12.78-1.56 18.71-4.68 28.84 2.96 10.13 7.64 16.09 13.98 13.89 19.93-2.2 5.95-7.99 11.53-7.04 21.13.94 9.6-.52 13.36-7.97 14.52-7.45 1.16-7.31-4.73-13.69.01-6.39 4.74-9.52 4.58-11.85 2.01-2.32-2.58-10.9.54-8.87-7.1z"
                    ></path>
                </g>
                <path
                    id="text-curve-1"
                    fill="none"
                    // stroke="#666"
                    strokeMiterlimit="10"
                    strokeWidth="7"
                    d="M274.5 599.4V460.5c0-24.87-21.05-44.9-45.85-42.93-10.33.82-18-3.2-24.59-10.48-13.67-15.08-63.44 2.75-53.23-40.34.45-1.89.76-3.81.94-5.75.96-10.42 1.43-38.86-19.72-52.04-26.17-16.3-28.21-40.6-23.48-56.25s5-26.77-14.13-49.47-.21-43.09 12.57-64.4 8.14-82.47 84.12-91.73 111.19-27.8 171.42 17.61 95.65 83.12 82.57 118.47c-13.08 35.35-47.47 68.53-41.85 125.6 5.61 57.07-3.06 79.38-47.37 86.3-40.9 6.38-45.64-16.7-75.62.88"
                ></path>

                <g ref={iconPath}>
                    <text textAnchor="middle">
                        <textPath
                            className="curved-text-1"
                            href="#text-curve-1"
                            xlinkHref="#text-curve-1"
                            ref={curvedText1}
                            startOffset="-67%"
                        >
                            {getText()}
                        </textPath>
                    </text>
                </g>
            </g>
        </svg>
    )
}

export const OpenLinkIcon = () => {
    const { state } = useContext(ThemeContext)
    const iconPath = useRef<SVGGElement>(null)

    useEffect(() => {
        if (iconPath.current && state?.currentTheme)
            toggleTheme(iconPath.current, state.currentTheme)
    }, [state?.currentTheme])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 33.56 33.51"
            xmlSpace="preserve"
        >
            <g fill="#333" ref={iconPath}>
                <path d="M16.24 33.5c-3.11 0-6.22.01-9.33 0-4.05-.01-6.86-2.72-6.88-6.77-.04-6.31-.04-12.62 0-18.94.03-4 2.81-6.71 6.82-6.73 1 0 2.35-.44 2.92.19.5.55.14 1.87.15 2.85.01.92-.02 1.84.02 2.76.02.49-.11.68-.63.65-.7-.04-1.4.01-2.09-.02-.53-.03-.73.13-.73.69.02 6.09.02 12.18 0 18.27 0 .53.2.62.67.62 6.06-.01 12.12-.01 18.18 0 .55 0 .76-.18.7-.71v-.1c.09-.84-.39-1.93.22-2.45.58-.49 1.64-.12 2.49-.14.98-.02 1.97.02 2.95-.02.56-.02.81.12.79.73-.04.92.01 1.84-.02 2.76-.15 3.67-2.88 6.3-6.61 6.33-3.21.05-6.41.03-9.62.03z"></path>
                <path d="M27.07 11.02c-2.44 2.45-4.72 4.71-6.96 7-.43.44-.66.46-1.09 0-1.13-1.2-2.3-2.37-3.5-3.5-.46-.43-.43-.67.01-1.1 2.06-2.02 4.09-4.07 6.14-6.11.22-.22.42-.44.77-.81-1.52 0-2.87-.02-4.22.01-.53.01-.7-.13-.69-.68.03-1.74.03-3.49 0-5.23 0-.45.12-.6.59-.6 4.95.02 9.9.02 14.85 0 .45 0 .59.12.59.58-.02 4.98-.01 9.96 0 14.94 0 .44-.11.62-.58.61-1.78-.02-3.55-.02-5.33 0-.47.01-.59-.17-.58-.61.02-1.41 0-2.83 0-4.5z"></path>
            </g>
        </svg>
    )
}

export const GithubIcon = () => {
    const { state } = useContext(ThemeContext)
    const iconPath = useRef<SVGGElement>(null)

    useEffect(() => {
        if (iconPath.current && state?.currentTheme)
            toggleTheme(iconPath.current, state.currentTheme)
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
