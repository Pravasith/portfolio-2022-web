const SunMoon = () => (
    <>
        <g id="background">
            <path
                id="b-3"
                fill="#FEFCBB"
                d="M100.4 49.7H.4V35.2c0-19.3 15.7-35 35-35h30c19.3 0 35 15.7 35 35v14.5z"
            ></path>
            <path id="b-2" fill="#FFF35F" d="M0.2 36.1H100V56.2H0.2z"></path>
            <path id="b-1" fill="#FFEC61" d="M0.2 55.2H100V70.2H0.2z"></path>
            <path
                id="b-0"
                fill="#FFED85"
                d="M72.2 97.2H28.1C12.7 97.2.3 84.7.3 69.4h99.8c0 15.3-12.5 27.8-27.9 27.8z"
            ></path>
        </g>
        <circle
            id="sunmoon-small"
            cx="50.1"
            cy="50.4"
            r="14.3"
            fill="#FF0"
        ></circle>
        <g
            id="sunmoon-lines"
            fill="none"
            stroke="#F7931E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2.2"
        >
            <path id="line-1" d="M46.3 59.8L76.3 59.8"></path>
            <path id="line-0" d="M45.5 65.9L63.1 65.9"></path>
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
                <stop offset="0.196" stopColor="#F15A24"></stop>
                <stop offset="1" stopColor="#FCEE21"></stop>
            </linearGradient>
            <path
                fill="url(#SVGID_1_)"
                d="M33.3 55.4c-.6-1.8-.9-3.7-.9-5.7 0-10 8.1-18 18-18s18 8.1 18 18c0 1.9-.3 3.7-.8 5.4"
            ></path>
        </g>
    </>
)

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
