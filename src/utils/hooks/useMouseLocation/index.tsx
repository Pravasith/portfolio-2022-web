import { useEffect, useState } from "react"

const useMouseMoveLocation = () => {
    const [mouseData, setMouseData] = useState<[number, number]>([0, 0])

    const roundMouse = (num: number) => {
        return Math.round(num * 100) / 100
    }

    const mouseMoveHandler = (e: MouseEvent) => {
        setMouseData([
            roundMouse((2 * e.clientX - window.innerWidth) / window.innerWidth),
            roundMouse(
                (2 * e.clientY - window.innerHeight) / window.innerHeight
            ),
        ])
    }

    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveHandler)

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler)
        }
    }, [])

    return mouseData
}

export default useMouseMoveLocation
