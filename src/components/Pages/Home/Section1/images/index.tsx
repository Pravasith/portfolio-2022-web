import React, { useEffect } from "react"
import gsap from "gsap"

const Turbulence = () => {
    useEffect(() => {
        gsap.to("#turb", {
            attr: {
                baseFrequency: 0.001,
            },
            duration: 2,
            repeat: Infinity,
        })
    }, [])

    return (
        <>
            <filter id="displacementFilter">
                <feTurbulence
                    id="turb"
                    type="noise"
                    baseFrequency="0.01"
                    numOctaves="8"
                    result="turbulence"
                />
                <feDisplacementMap
                    in2="turbulence"
                    in="SourceGraphic"
                    scale="50"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </>
    )
}

export const Section1BgdBeach = () => {
    const svgPath1 = {
        keyframe1:
            "M932.19 483.87c132.78-1.76 148 206.4 31.95 284.81-64.83 42.73-188.07 60.42-277.72 12.93C523.17 670.41 581 502.73 252.63 510-306.51 580.8 326-302.74 570.41 187c113.85 215.88 41.84 241.2 132.74 295.83s149.96 2.67 229.04 1.04z",
        keyframe2:
            "M932.19 483.87C1065 482.11 1075.1 718.59 959 797c-64.82 42.73-198.35 80.49-288 33-163.25-111.2-113.6-374.3-442-367-559.14 70.78 376.91-805.47 463-265 18 113-8 254 39 309 17.15 20.07 122.11-21.5 201.19-23.13z",
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1064 878">
            <defs>
                <Turbulence />
                <clipPath id="clip-path">
                    <path
                        fill="none"
                        id="bgdPath"
                        d={svgPath1.keyframe1}
                    ></path>
                </clipPath>
            </defs>

            <g filter="url(#displacementFilter)">
                <g clipPath="url(#clip-path)" data-name="Layer 1">
                    <path fill="#FCEE21" d="M-402 -93H1518V179H-402z"></path>
                    <path fill="#FEFCBB" d="M-402 179H1518V451H-402z"></path>
                    <path fill="#43D7FF" d="M-402 451H1518V723H-402z"></path>
                    <path fill="#00DDD7" d="M-402 723H1518V995H-402z"></path>
                </g>
            </g>
        </svg>
    )
}

export const Section1BgdBeach1 = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 167 164"
        >
            <defs>
                <Turbulence />
                <clipPath id="clip-path-2">
                    <path
                        fill="none"
                        d="M40 130s-19-15-19.46-48c-.15-10.43 10-26 21.61-36 28.09-24.22 66.43-29.46 85.07-19.2 16 8.84 15.24 18.57 16.78 28.23 3.32 20.9-12.3 63.65-27 75-32.07 24.73-61.84 13.3-77-.03z"
                    ></path>
                </clipPath>
            </defs>
            <g filter="url(#displacementFilter)">
                <g clipPath="url(#clip-path-2)">
                    <path fill="#33b6ff" d="M2 3H163V89H2z"></path>
                    <path fill="#3cf" d="M2 89H163V175H2z"></path>
                </g>
            </g>
        </svg>
    )
}
