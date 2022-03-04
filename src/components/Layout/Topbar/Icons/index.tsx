const SunMoon = () => (
    <>
        <g>
            <path
                fill="#FEFCBB"
                d="M100.4 39.2H.4v-8.7C.4 13.8 13.9.3 30.6.3h39.5c16.7 0 30.2 13.5 30.2 30.2v8.7z"
            ></path>
            <path fill="#FFF35F" d="M0.2 36.1H100V56.2H0.2z"></path>
            <path fill="#FFEC61" d="M0.2 55.2H100V70.2H0.2z"></path>
            <path
                fill="#FFED85"
                d="M72.2 100.2H28.1C12.7 100.2.3 87.7.3 72.4v-3h99.8v3c0 15.3-12.5 27.8-27.9 27.8z"
            ></path>
        </g>
        <circle cx="50.1" cy="50.4" r="14.3" fill="#FF0"></circle>
        <g
            fill="none"
            stroke="#F7931E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2.2"
        >
            <path d="M35.4 60.2L65.4 60.2"></path>
            <path d="M41.5 65.9L59.1 65.9"></path>
        </g>
        <g>
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
