import gsap from "gsap"

import { useEffect } from "react"
import { OnScroll } from "./interface"

const useScroll = (onScroll: OnScroll) => {
    // const roundMouse = (num: number) => {
    //     return Math.round(num * 100) / 100
    // }

    // const mouseMoveHandler = (e: ScrollValues) => {
    //     // onScroll([
    //     //     roundMouse((2 * e[0] - window.innerWidth) / window.innerWidth),
    //     //     roundMouse((2 * e[1] - window.innerHeight) / window.innerHeight),
    //     // ])
    // }

    useEffect(() => {
        const init = async () => {
            const { Observer } = await import("gsap/Observer")

            gsap.registerPlugin(Observer)

            Observer.create({
                type: "wheel,scroll",
                // onUp: observer => {
                //     // console.log(observer.velocityX, observer.velocityY)
                // },
            })
        }

        init()
    }, [onScroll])
}

export default useScroll
