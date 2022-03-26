import { useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react"
import { Vector3 } from "three"
import * as THREE from "three"
import { findMesh, randoInt } from "@utils/index"
import gsap from "gsap"

export const Table = () => {
    const gltf = useGLTF("/gltfs/table.gltf")

    const [lightPos, setLightPos] = useState<Vector3>(new Vector3(5, 5, 5))

    const init = async () => {
        const dat = await import("dat.gui")
        const gui = new dat.GUI()
        // ... rest of the three.js code

        const texture = new THREE.TextureLoader().load(
            "textures/sprite-laptop.png"
        )

        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping

        const INITIAL_X_VALUE = -0.054

        const getOffsetX = (): number => {
            const STEP = 0.1111,
                NUMBER_OF_IMAGES_IN_SPRITE = 9,
                X_STEP_ARRAY = new Array(NUMBER_OF_IMAGES_IN_SPRITE)
                    .fill(INITIAL_X_VALUE)
                    .map((x, i) => STEP * (i + 1) + x)

            return X_STEP_ARRAY[randoInt(0, NUMBER_OF_IMAGES_IN_SPRITE - 1)]
        }

        const laptopScreenPixels = findMesh(gltf, "laptop-screen"),
            laptopScreen = findMesh(gltf, "laptopbase001"),
            deskLight = findMesh(gltf, "light-shine")

        gsap.to(laptopScreen.rotation, { x: 1.4, duration: 4 })

        const material = new THREE.MeshPhongMaterial({
            // emissive: "#fff",
            // emissiveIntensity: 0.1,
        })

        material.map = texture

        if (material.map) {
            const { offset, repeat } = material.map

            offset.x = INITIAL_X_VALUE
            offset.y = 0.99
            repeat.x = 0.44
            repeat.y = 4.04

            material.map.flipY = false

            setInterval(() => {
                gsap.set(offset, { x: getOffsetX() })
            }, 1000)
        }

        if (material.map) {
            gui.add(material.map.offset, "x", -2, 2, 0.001)
            gui.add(material.map.offset, "y", 0, 2, 0.01)
            gui.add(material.map.repeat, "x", 0, 5, 0.001)
            gui.add(material.map.repeat, "y", 0, 5, 0.01)
        }

        ;(laptopScreenPixels as THREE.Mesh).material = material

        const V = new Vector3()

        deskLight.getWorldPosition(V)

        setLightPos(V)
    }

    useEffect(() => {
        init()
    }, [gltf])

    const Lights = () => {
        return (
            <>
                <pointLight
                    position={lightPos}
                    color={"#FFF"}
                    intensity={0.2}
                    castShadow
                    shadow-mapSize-height={1024}
                    shadow-mapSize-width={1024}
                    shadow-bias={-0.000175}
                />
            </>
        )
    }

    return (
        <>
            <Lights />
            {/* MODEL BELOW: */}
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={2.125} />
        </>
    )
}
