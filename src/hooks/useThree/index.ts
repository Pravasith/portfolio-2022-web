import { RefObject, useEffect, useState } from "react"
import * as THREE from "three"
import { ThreeBasicExports, RenderOptions } from "./interface"

const useThree = (
    threeCanvasRef: RefObject<HTMLDivElement>
): [ThreeBasicExports | undefined, RenderOptions] => {
    const [threeBasicExports, setThreeBasicExports] =
        useState<ThreeBasicExports>()

    let requestId: number | undefined

    useEffect(() => {
        const container = threeCanvasRef.current

        if (!!container) {
            const scene = new THREE.Scene()
            // scene.background = new THREE.Color(0xff0000)
            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            )

            const WIDTH = container.clientWidth,
                HEIGHT = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                // antialias: true,
                // alpha: true,
            })

            // renderer.outputEncoding = THREE.sRGBEncoding
            // renderer.setPixelRatio( window.devicePixelRatio )
            renderer.setSize(WIDTH, HEIGHT)
            // renderer.setClearColor(0x000000, 0) // Background color
            // renderer.shadowMap.enabled = true

            container.appendChild(renderer.domElement)

            setThreeBasicExports({ scene, camera, renderer })
        }
    }, [threeCanvasRef])

    const loop = () => {
        requestId = undefined

        // ...
        // // do stuff
        // ...

        threeBasicExports?.scene &&
            threeBasicExports?.camera &&
            threeBasicExports.renderer?.render(
                threeBasicExports.scene,
                threeBasicExports.camera
            )

        start()
    }

    const start = () => {
        if (!requestId) {
            requestId = window.requestAnimationFrame(loop)
        }
    }

    const stop = () => {
        if (requestId) {
            window.cancelAnimationFrame(requestId)
            requestId = undefined
        }
    }

    return [
        threeBasicExports,
        {
            start,
            stop,
        },
    ]
}

export { useThree }
