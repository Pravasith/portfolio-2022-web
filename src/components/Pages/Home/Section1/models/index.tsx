import { useGLTF, useHelper } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import {
    DirectionalLightHelper,
    Object3D,
    SpotLightHelper,
    Vector3,
} from "three"
import * as THREE from "three"
import { findMeshByName, randoInt } from "@utils/index"
import gsap from "gsap"
import useMouseMoveLocation from "@hooks/useMouseLocation"

interface LightsProps {
    parentObjectForSpotlight: Object3D
    spotlightTarget: Object3D
}

const Lights = ({ parentObjectForSpotlight, spotlightTarget }: LightsProps) => {
    const spotLightRef = useRef<THREE.SpotLight>(new THREE.SpotLight())
    const dirLight = useRef<THREE.DirectionalLight>(
        new THREE.DirectionalLight()
    )

    const mouseData = useMouseMoveLocation()

    useHelper(spotLightRef.current && spotLightRef, SpotLightHelper, "#000")
    useHelper(dirLight.current && dirLight, DirectionalLightHelper)

    const init = async () => {
        const dat = await import("dat.gui")
        const gui = new dat.GUI()

        function buildGui() {
            const spotLight = spotLightRef.current
            const params = {
                "light color": spotLight.color.getHex(),
                intensity: spotLight.intensity,
                distance: spotLight.distance,
                angle: spotLight.angle,
                penumbra: spotLight.penumbra,
                decay: spotLight.decay,
                focus: spotLight.shadow.focus,
            }

            gui.addColor(params, "light color").onChange(function (val) {
                spotLight.color.setHex(val)
            })

            gui.add(params, "intensity", 0, 2).onChange(function (val) {
                spotLight.intensity = val
            })

            gui.add(params, "distance", 0, 200).onChange(function (val) {
                spotLight.distance = val
            })

            gui.add(params, "angle", 0, Math.PI / 3).onChange(function (val) {
                spotLight.angle = val
            })

            gui.add(params, "penumbra", 0, 1).onChange(function (val) {
                spotLight.penumbra = val
            })

            gui.add(params, "decay", 1, 2).onChange(function (val) {
                spotLight.decay = val
            })

            gui.add(params, "focus", 0, 1).onChange(function (val) {
                spotLight.shadow.focus = val
            })

            gui.open()
        }

        buildGui()
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        const V = new Vector3()
        parentObjectForSpotlight.getWorldPosition(V)
        spotLightRef.current.position.copy(V)
    }, [mouseData])

    return (
        <>
            {/* <pointLight
                position={lightPos}
                color={"#FFF"}
                intensity={0.2}
                castShadow
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                shadow-bias={-0.000175}
            /> */}

            <directionalLight
                ref={dirLight}
                position={[2, 2, 2]}
                intensity={0.65}
                castShadow
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                shadow-bias={-0.000175}
            />

            <ambientLight intensity={0.25} />

            <spotLight
                ref={spotLightRef}
                target={spotlightTarget}
                castShadow
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                shadow-bias={-0.000175}
            />
        </>
    )
}

export const Table = () => {
    const gltf = useGLTF("/gltfs/table.gltf")

    const [deskLightParent, setDeskLightParent] = useState<Object3D>()
    const [spotLightTarget, setSpotLightTarget] = useState<Object3D>()

    const mouseData = useMouseMoveLocation()

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

        const laptopScreenPixels = findMeshByName(gltf, "laptop-screen"),
            laptopScreen = findMeshByName(gltf, "laptopbase001")

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

        const deskLight = findMeshByName(gltf, "light-shine")

        setDeskLightParent(deskLight)

        const sex = findMeshByName(gltf, "SEX")
        setSpotLightTarget(sex)
    }

    useEffect(() => {
        init()
    }, [gltf])

    useEffect(() => {
        if (gltf) {
            const lampNeck = findMeshByName(gltf, "lamp-neck")

            const lampPivot3 = findMeshByName(gltf, "lamppivot3")

            lampNeck.rotation.y = mouseData[0]
            lampPivot3.rotation.y = -mouseData[1] + 0.5
            // lampNeck.rotateY(mouseData[1])
        }
    }, [mouseData])

    return (
        <>
            {spotLightTarget && deskLightParent && (
                <Lights
                    parentObjectForSpotlight={deskLightParent}
                    spotlightTarget={spotLightTarget}
                />
            )}
            {/* MODEL BELOW: */}
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={2.125} />
        </>
    )
}
