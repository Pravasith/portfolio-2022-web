import gsap from "gsap"

import { useEffect } from "react"
import { OnMouseScroll } from "./interface"

const useMouseScroll = (onMouseScroll: OnMouseScroll) => {
    useEffect(() => {
        const init = async () => {
            const { Observer } = await import("gsap/Observer")

            gsap.registerPlugin(Observer)

            Observer.create({
                type: "wheel,touch,pointer",
                onUp: onMouseScroll,
                onDown: onMouseScroll,
                wheelSpeed: 0,
            })
        }

        init()
    }, [onMouseScroll])
}

export default useMouseScroll
