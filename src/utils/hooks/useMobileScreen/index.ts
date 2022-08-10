import { useEffect, useState } from "react"

const useMobileScreen = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.innerWidth < 720 && setIsMobile(true)
        window.addEventListener("resize", handleResize)
    }, [])

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    return isMobile
}

export default useMobileScreen
