import gsap from "gsap"

import { useEffect, useState } from "react"

const useMouseMoveLocation = () => {
    const [mouseData, setMouseData] = useState<[number, number]>([0, 0])

    const roundMouse = (num: number) => {
        return Math.round(num * 100) / 100
    }

    const mouseMoveHandler = (e: { x: number; y: number }) => {
        setMouseData([
            roundMouse((2 * e.x - window.innerWidth) / window.innerWidth),
            roundMouse((2 * e.y - window.innerHeight) / window.innerHeight),
        ])
    }

    useEffect(() => {
        const init = async () => {
            const { Observer } = await import("gsap/Observer")

            gsap.registerPlugin(Observer)

            Observer.create({
                type: "pointer,touch",
                onMove: observer => {
                    observer.x &&
                        observer.y &&
                        mouseMoveHandler({ x: observer.x, y: observer.y })
                },
            })
        }

        init()
    }, [])

    return mouseData
}

export default useMouseMoveLocation
