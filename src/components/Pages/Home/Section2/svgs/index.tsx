import useScrollTrigger from "@hooks/useScroll"
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
                        fontSize={"1.35rem"}
                        key={"word" + i}
                    >
                        &nbsp;&nbsp;{word}&nbsp;&nbsp;
                    </tspan>
                )
            } else
                return (
                    <tspan fontSize={"1.35rem"} key={"word" + i}>
                        &nbsp;&nbsp;{word}&nbsp;&nbsp;
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
                    scrub: 2,
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
            viewBox="0 0 563.69 791.8"
        >
            <path
                id="text-curve-3"
                fill="none"
                stroke="#0FF"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M200.63 328.51s4.7-26.88-13.03-37.92-19.11-27.51-15.91-38.11c3.2-10.6 3.39-18.13-9.57-33.51s-.14-29.19 8.51-43.63c8.66-14.44 5.52-55.87 56.99-62.15 51.48-6.28 75.33-18.83 116.13 11.93s64.8 56.31 55.94 80.26c-8.86 23.95-32.16 46.43-28.35 85.09 3.8 38.67-2.07 53.78-32.09 58.46-30.02 4.68-29.42-19.04-55.15.04-25.72 19.08-38.34 18.45-47.72 8.1-9.39-10.36-43.91 2.2-35.75-28.56z"
            ></path>
            <path
                id="text-curve-2"
                fill="none"
                stroke="#0FF"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M181.65 351.19s5.83-33.38-16.18-47.1-23.73-34.16-19.76-47.33c3.98-13.17 4.21-22.52-11.89-41.62s-.18-36.25 10.57-54.19 6.85-69.39 70.78-77.18 93.56-23.39 144.23 14.81 80.48 69.94 69.48 99.68-39.94 57.66-35.22 105.68-2.58 66.79-39.86 72.61-36.54-23.65-68.49.05-47.61 22.92-59.27 10.06c-11.64-12.86-54.53 2.74-44.39-35.47z"
            ></path>
            <path
                id="text-curve-1"
                fill="none"
                // stroke="#0FF"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M286.35 792.4V467.35c0-25.28-20.85-46.03-46.1-44.95-9.51.41-16.68-3.5-22.88-10.34-13.37-14.76-62.03 2.66-52.15-39.39.45-1.93.78-3.9.96-5.87.93-10.31 1.31-37.99-19.32-50.84-25.63-15.97-27.62-39.76-22.99-55.09 4.63-15.32 4.9-26.21-13.84-48.44s-.21-42.2 12.31-63.07 7.97-80.76 82.38-89.84S313.61 32.3 372.59 76.76s93.67 81.4 80.86 116.02c-12.81 34.62-46.48 67.11-40.99 123.01 5.5 55.89-3 77.74-46.39 84.51-40.05 6.25-44.69-16.36-74.05.87"
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
