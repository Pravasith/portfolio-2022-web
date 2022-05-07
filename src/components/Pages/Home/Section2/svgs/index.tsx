import useScrollTrigger from "@hooks/useScrollTrigger"
import React, { useRef } from "react"

export const CurvedText = () => {
    const getText = () => {
        const words = [
            "UX DESIGN",
            "ILLUSTRATOR",
            "BLENDER",
            "3D MODELLING",

            "AWS",
            "NODE",
            "WEBGL",
            "NGINX",
            "REACT.JS",
            "NEXT.JS",
            "THREE.JS",
            "GRAPHQL",
            "POSTGRES",
            "MONGODB",
            "DOCKER",
        ]

        return words.map((word, i) => {
            if (i % 2 === 0) {
                return (
                    <tspan
                        className="curlyTextBold"
                        fontSize={"1.25rem"}
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

    // useEffect(() => {
    //     if (curvedText1.current)
    //         gsap.to(curvedText1.current, {
    //             attr: { startOffset: "100%" },
    //             duration: 10,
    //         })
    // }, [curvedText1.current])

    useScrollTrigger(
        gsapX => {
            if (curvedText1.current) {
                const scrollTrigger = {
                    trigger: ".section-2-container",
                    start: "top top",
                    end: "bottom 25%",
                    // markers: true,
                    scrub: 0.5,
                    pin: true,
                }

                gsapX.to(curvedText1.current, {
                    scrollTrigger,
                    attr: { startOffset: "50%" },
                    yoyo: true,
                    duration: 10,
                })
                // gsapX.to(".curved-text-2", {
                //     scrollTrigger,
                //     y: 20,
                //     scale: 1.05,
                //     yoyo: true,
                // })
            }
        },
        [curvedText1.current]
    )

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 563.69 599.8"
        >
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
        </svg>
    )
}
