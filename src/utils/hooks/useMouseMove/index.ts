import gsap from "gsap"
import Observer from "gsap/dist/Observer"
gsap.registerPlugin(Observer)

import { useEffect } from "react"
import { MouseMoveValues, OnMouseMove } from "./interface"

const useMouseMove = (onMouseMove: OnMouseMove) => {
    const roundMouse = (num: number) => {
        return Math.round(num * 100) / 100
    }

    const mouseMoveHandler = (e: MouseMoveValues) => {
        onMouseMove([
            roundMouse((2 * e[0] - window.innerWidth) / window.innerWidth),
            roundMouse((2 * e[1] - window.innerHeight) / window.innerHeight),
        ])
    }

    useEffect(() => {
        const init = async () => {
            // const { Observer } = await import("gsap/Observer")

            // gsap.registerPlugin(Observer)
            Observer.create({
                type: "touch,pointer",
                onMove: observer => {
                    observer.x &&
                        observer.y &&
                        mouseMoveHandler([observer.x, observer.y])
                },
            })
        }

        init()
    }, [onMouseMove])
}

export default useMouseMove
