import React from "react"

export const CurvedText = () => {
    const getText = () => {
        const words = [
            "REACT.JS",
            "NEXT.JS",
            "THREE.JS",
            "GRAPHQL",
            "POSTGRES",
            "MONGODB",
            "DOCKER",
            "NGINX",
            "AWS",
            "WEBGL",
            "NODE",

            "PROTOTYPING",
            "VISUAL DESIGN",
            "SVG",
            "CANVAS",
            "ILLUSTRATOR",
            "BLENDER",
            "3D MODELLING",
            "ANIMATION",
        ]

        return words.map((word, i) => {
            if (i % 2 === 0) {
                return (
                    <tspan key={"word" + i}>
                        &nbsp;&nbsp;{word}&nbsp;&nbsp;
                    </tspan>
                )
            } else
                return (
                    <React.Fragment key={"word + i"}>
                        &nbsp;&nbsp;{word}&nbsp;&nbsp;
                    </React.Fragment>
                )
        })
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563.69 599.8">
            <path
                id="a445dd1a-ae08-46d8-8c42-0376abdbf60a"
                fill="none"
                stroke="none"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M165.74 436.08s6.78-38.75-18.78-54.67-27.55-39.66-22.96-54.94 4.89-26.14-13.8-48.31-.2-42.09 12.28-62.9 7.95-80.55 82.16-89.6 108.6-27.15 167.42 17.2 93.44 81.14 80.67 115.7-46.36 66.94-40.88 122.68-3 77.53-46.26 84.29-42.43-27.46-79.51.05-55.26 26.61-68.79 11.68-63.29 3.16-51.55-41.18z"
                data-name="text-curve-3"
            ></path>
            <path
                id="f97b3bd2-5a97-4350-883d-c43b1100b612"
                fill="none"
                stroke="#0ff"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M138.38 468.78s8.41-48.12-23.33-67.89-34.21-49.25-28.48-68.24 6.07-32.46-17.14-60-.26-52.27 15.24-78.12 9.88-100 102-111.27 134.88-33.72 207.94 21.35 116 100.83 100.16 143.71-57.53 83.12-50.77 152.36-3.67 96.32-57.42 104.68-52.69-34.1-98.74.07-68.64 33-85.45 14.5-78.62 3.93-64.01-51.15z"
                data-name="text-curve-2"
            ></path>
            <path
                id="e6a75b32-1ec6-49de-9cbe-f729c9e751c9"
                fill="none"
                stroke="#0ff"
                strokeMiterlimit="10"
                strokeWidth="7"
                d="M115.36 496.3s9.79-56-27.15-79-39.82-57.3-33.15-79.44 7.06-37.79-20-69.84-.3-60.84 17.74-90.92S64.34 60.67 171.62 47.58s157-39.24 242 24.86 135 117.35 116.58 167.26-67 96.75-59.09 177.33-4.31 112.07-66.87 121.83-61.32-39.68-114.92.09-79.89 38.46-99.45 16.87-91.51 4.58-74.51-59.52z"
                data-name="text-curve-1"
            ></path>

            <text textAnchor="middle">
                <textPath
                    className="my-text"
                    href="#a445dd1a-ae08-46d8-8c42-0376abdbf60a"
                    startOffset="50%"
                >
                    <animate
                        attributeName="startOffset"
                        from="-50%"
                        to="150%"
                        begin="0s"
                        dur="20s"
                        repeatCount="indefinite"
                    ></animate>
                    {getText()}
                </textPath>
            </text>
        </svg>
    )
}
