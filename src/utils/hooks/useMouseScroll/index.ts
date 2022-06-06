import gsap from "gsap"

import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

const useMouseScroll = () => {
    const [scrollY, setScrollY] = useState<number>()

    const [debouncedScrollY] = useDebounce(scrollY, 100)

    useEffect(() => {
        const init = async () => {
            const { Observer } = await import("gsap/Observer")

            gsap.registerPlugin(Observer)

            Observer.create({
                type: "wheel,touch,pointer",
                onUp: o => {
                    setScrollY(o.scrollY())
                },
                onDown: o => {
                    setScrollY(o.scrollY())
                },
            })
        }

        init()
    }, [])

    return debouncedScrollY
}

export default useMouseScroll
