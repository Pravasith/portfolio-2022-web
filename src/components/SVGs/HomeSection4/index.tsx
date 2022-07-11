import { Turbulence } from "@components/SVGs/SvgFilters"

export const WaterPuddle = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 324.98 112.76"
            xmlSpace="preserve"
        >
            <path
                fill="#B3EBFF"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="5"
                d="M259.83 22.75s-5.83 9.21 16.17 13c22 3.79 23.72 9.43 19.74 13.06-3.97 3.63-4.21 6.21 11.88 11.49 16.09 5.27.18 10-10.57 14.95-10.74 4.95-6.85 19.15-70.73 21.3S132.83 103 82.19 92.46 1.78 73.15 12.78 64.95s39.91-15.91 35.19-29.16 2.57-18.43 39.83-20.04 36.52 6.53 68.44-.01 47.58-6.32 59.23-2.77 54.49-.77 44.36 9.78z"
            ></path>
            <path
                fill="#B3EBFF"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="5"
                d="M217.82 35.78s-3.46 5.47 9.61 7.72 14.09 5.6 11.73 7.76c-2.36 2.16-2.5 3.69 7.06 6.82 9.56 3.13.1 5.94-6.28 8.88-6.38 2.94-4.07 11.38-42.03 12.66s-55.55 3.84-85.65-2.43-47.78-11.45-41.25-16.33c6.53-4.88 23.71-9.45 20.91-17.33-2.8-7.87 1.53-10.95 23.67-11.91s21.7 3.88 40.67-.01 28.27-3.76 35.19-1.65c6.93 2.12 32.39-.44 26.37 5.82z"
            ></path>
        </svg>
    )
}

export const Plants = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 160.98 305.76"
            xmlSpace="preserve"
        >
            <path
                fill="#FF0"
                d="M40.9 35.31c18.18-27.9 62.53 6.27 82.65 28.16 48.98 53.3-48.54 89.37-75.39 70.51-34.63-24.32-26.31-69.45-7.26-98.67z"
            ></path>
            <g fill="#8CC63F">
                <path d="M73.7 285.91s-16.87-14-11.68-27c5.19-13 18.16-30 18.16-43s-12.67-24.9-9.58-42.45c3.09-17.55 23.85-25.55 16.07-41.55S64.06 90.99 74.72 75.95s13.69-26.08 13.69-26.08l12.54 16.04s-19.46 23-14.27 31 16.87 28.8 14.27 41.4-22.06 25.6-18.16 39.6 22.06 35 11.68 50-20 28.29-19.08 35.65 17.65 22.35 17.65 22.35H73.7z"></path>
                <path d="M90.32 285.91s-3.29-20 7.71-31 7-35.19 0-46.09c-7-10.91 4-24.91 9-35.91s-3-18-5-29 6.62-22.78 6.62-22.78l4.38 11.78s-6 7.67 0 18.83c6 11.17 8 20.17 3 28.17s-12 18-8 27 11 27 4 39-11.34 31-7.67 40H90.32zM85.25 285.91s5.57-20-13.07-31-11.86-35.19 0-46.09c11.86-10.91-6.78-24.91-15.25-35.91s5.08-18 8.47-29c3.39-11-11.22-22.78-11.22-22.78l-7.43 11.78s10.17 7.67 0 18.83c-10.17 11.17-13.56 20.17-5.08 28.17s20.34 18 13.56 27-18.64 27-6.78 39 19.22 31 13 40h23.8z"></path>
            </g>
        </svg>
    )
}

export const PinkCircle = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 265.4 260.2"
            xmlSpace="preserve"
        >
            <circle cx="132.7" cy="130.3" r="121" fill="#F97878"></circle>
        </svg>
    )
}

export const YellowBackground = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 1920 154.6"
            xmlSpace="preserve"
            className="scale-150 origin-center"
        >
            <defs>
                <clipPath id="clip-path-x-24">
                    <path fill="none" d="M0 0H1920V154.6H0z"></path>
                </clipPath>

                <Turbulence />
            </defs>
            <g filter="url(#displacementFilter)">
                <g clipPath="url(#clip-path-x-24)">
                    <path fill="#FFFDD7" d="M0 0H1920V154.6H0z"></path>
                    <path fill="#FEFCBB" d="M0 0H1920V63H0z"></path>
                </g>
            </g>
        </svg>
    )
}
