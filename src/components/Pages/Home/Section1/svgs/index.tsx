import React, { useEffect } from "react"
import gsap from "gsap"
import useMouseMoveLocation from "@hooks/useMouseLocation"

const Turbulence = () => {
    const mouseData = useMouseMoveLocation()

    useEffect(() => {
        const tl = gsap.timeline()

        const [x, y] = mouseData

        if ((x * 70) % 2 === 0 || (y * 70) % 2 === 0) {
            tl.set("#turb", {
                attr: {
                    baseFrequency: 0.008,
                },
            })
            tl.to("#turb", {
                attr: {
                    baseFrequency: 0.001,
                },
                duration: 2,
                ease: "power4.out",
            })
        }
    }, [...mouseData])

    return (
        <>
            <filter id="displacementFilter">
                <feTurbulence
                    id="turb"
                    type="turbulence"
                    baseFrequency="0.01"
                    numOctaves="8"
                    seed={1}
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

export const Section1RedTriangles = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 194 188"
        >
            <defs>
                <Turbulence />
                <clipPath id="a98a9356-e26c-40ab-a6f4-0a69d4d1ddc5">
                    <path
                        fill="none"
                        d="M154 85.92a10.66 10.66 0 01-5 8.47l-17 11.26-60.52 39.95c-7.22 4.76-15.92.82-17.29-7.71-1.32-8.16-2.83-16.29-4.26-24.44S47 96.88 45.55 88.59c-1.67-9.52-3.29-19.06-5-28.57-1.17-6.37 2.14-11.81 8.23-13.32 2.69-.67 5.19.07 7.71.84L134 71.05c4.13 1.25 8.27 2.47 12.38 3.77 4.62 1.47 7.62 5.59 7.62 11.1z"
                    ></path>
                </clipPath>
            </defs>

            <g filter="url(#displacementFilter)">
                <g clipPath="url(#a98a9356-e26c-40ab-a6f4-0a69d4d1ddc5)">
                    <path
                        fill="#eb1d25"
                        d="M16.93 16.91H177.12V172.15H16.93z"
                    ></path>
                    <path
                        fill="#fe6851"
                        d="M48.66 57.59A2.49 2.49 0 0152 54.94c4.39 1.32 8.76 2.67 13.14 4l28.4 8.58 18.21 5.54 25.86 7.81c2 .6 3.94 1.24 5.93 1.82a2.51 2.51 0 012 1.87 2.6 2.6 0 01-1.19 2.89c-2 1.32-4 2.61-5.92 3.91L105.67 113q-12 8-24.07 15.89-7.5 5-15 9.87a2.45 2.45 0 01-4-1.62c-.78-3.94-1.46-7.89-2.16-11.84-.84-4.82-1.65-9.65-2.5-14.48q-1.41-8-2.84-16.09l-4-22.39q-1.23-7-2.44-14a5.88 5.88 0 010-.75zM56 71.81A74.87 74.87 0 0057.4 81c1.7 9.9 3.5 19.79 5.28 29.68.93 5.18 6.78 7.94 11.09 5.12q18.8-12.3 37.51-24.73a7.34 7.34 0 000-12 17.12 17.12 0 00-5-2c-9.7-3-19.42-5.9-29.13-8.84l-11.93-3.57c-4.73-1.43-9.62 2.57-9.22 7.15z"
                    ></path>
                    <path
                        fill="#eb1d25"
                        d="M56 71.81c-.36-4.58 4.53-8.58 9.26-7.15l11.87 3.59c9.71 2.94 19.43 5.86 29.13 8.84a17.12 17.12 0 015 2 7.34 7.34 0 010 12q-18.72 12.43-37.51 24.73c-4.31 2.82-10.16.06-11.09-5.12-1.76-9.94-3.56-19.83-5.26-29.7a74.87 74.87 0 01-1.4-9.19zm48.78 13.56l-7.52-2.28-30.55-9.26c-2.18-.67-2.2-.66-1.81 1.56q1.56 9 3.16 17.94c.79 4.46 1.6 8.91 2.38 13.37.19 1.06.28 1.12 1.23.49l18.24-12c4.88-3.19 9.74-6.45 14.83-9.82z"
                    ></path>
                    <path
                        fill="#fe6851"
                        d="M104.74 85.37c-5.09 3.37-9.95 6.59-14.83 9.8l-18.24 12c-1 .63-1 .57-1.23-.49-.78-4.46-1.59-8.91-2.38-13.37q-1.59-9-3.16-17.94c-.39-2.22-.37-2.23 1.81-1.56l30.51 9.26z"
                    ></path>
                </g>
            </g>
        </svg>
    )
}

export const Section1Squigglies = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 918.43 857.2"
        >
            <Turbulence />
            <g filter="url(#displacementFilter)">
                <path
                    fill="none"
                    stroke="#b3b3b3"
                    strokeMiterlimit="10"
                    strokeWidth="0.5"
                    d="M363.76 61.17s96-1 133-4 138 22 165 40 45 56 48 60 17 3 24 8 3 22 9 30 42 8 58 36-1 183 12 203 39.51 54.48 29.76 90.24-72.66 38.85-82.21 69.3-1.55 62.46-9.55 75.46S720.3 686 695 688.56s-140.27 47.61-178.27 81.61-108 26-129 24-93.7-35.58-119.85-64.29-58.15-76.71-80.15-93.71-88-60-98-84 20.17-89 18.58-125.5-18.55-82.39-14.05-109.45 49.38-48.73 60.94-74.39 14.56-89.66 48.56-121.66 109-59 160-60z"
                ></path>
                <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="0.25"
                    d="M488.79 65.36s198.68 70.33 251.42 138.9 37.71 107.94 40 112-4.79 26.91-3 46.25 19.34 121.32 14.06 147.69S736.7 680.74 691 686s-109 42.2-130.11 52.75-55.49 28.1-77.89 30.76-52.27 34.31-83.91 15-80.3-37.82-98.17-52.32-46-18-56.56-23.28-28.13-7-45.71-28.14-24.62-21.09-42.2-47.47-22.34-40.45-22.58-63.3-14.31-65.07-21.35-80.89-14.06-40.44-21.1-51-1.75-29.16 0-35.68 9.61-40.69 15.36-45.58 5.29-26.8 7.28-30.79 3.74-63.78 14.29-79.6 34.21-35.47 35.57-40.59 11.33-22.08 40.63-32.06 43.92-37.49 50.67-41.32-.28-12.62 19.06-24.93 22.86-14.07 35.17-21.1 1.75-17.58 38.68-8.79 31.65 15.82 47.47 7 6-17.58 25-19.34 25.5-1.76 34.56 0S471.69 61 491.67 64"
                ></path>
            </g>
        </svg>
    )
}
