import { Turbulence } from "@components/SVGs/SvgFilters"

export const TickMarkGraphic = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 301.6 301.6"
        >
            <g>
                <defs>
                    <circle
                        id="circle-id-X56X98"
                        cx="150.8"
                        cy="150.8"
                        r="126.5"
                    ></circle>
                </defs>
                <defs>
                    <Turbulence noScrollAnimation />
                    <clipPath id="SVGID_00000122684717709394773380000015446444033161068179_">
                        <use
                            overflow="visible"
                            xlinkHref="#circle-id-X56X98"
                        ></use>
                    </clipPath>
                </defs>

                <g filter="url(#displacementFilter)">
                    <g clipPath="url(#SVGID_00000122684717709394773380000015446444033161068179_)">
                        <path
                            fill="#5BCBF1"
                            d="M-11.7 14.3H328.3V289.3H-11.7z"
                        ></path>
                        <path
                            fill="#F26A55"
                            d="M-11.86 164.22s66.12-39.5 139.12 3.5 103 58 146 42 55.04-45.5 55.04-45.5V289.3H-11.86s-.11-125.58 0-125.08z"
                        ></path>
                        <path
                            fill="#F8F07E"
                            d="M-11.91 27.69S85.3 124.3 178.3 95.3s150-81 150-81H-11.91v13.39z"
                        ></path>
                    </g>
                </g>
            </g>
            <path
                style={{ transform: "translate(10px, 10px)" }}
                fill="none"
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="27"
                d="M77.07 143.63L114.92 192.9 224.53 108.7"
            ></path>
        </svg>
    )
}
