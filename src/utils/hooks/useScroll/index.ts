import gsap from "gsap"

import { useEffect } from "react"
import { OnScrollTrigger } from "./interface"

const useScrollTrigger = (onScrollTrigger: OnScrollTrigger, deps: any[]) => {
    useEffect(() => {
        const init = async () => {
            const { ScrollTrigger } = await import("gsap/ScrollTrigger")

            gsap.registerPlugin(ScrollTrigger)
            onScrollTrigger(gsap)
        }

        init()
    }, [...deps])
}

export default useScrollTrigger
