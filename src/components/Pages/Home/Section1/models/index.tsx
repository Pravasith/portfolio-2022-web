import { useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { Object3D, Vector3 } from "three"
import * as THREE from "three"
import { findMeshByName, randoInt } from "@utils/index"
import gsap from "gsap"
import useMouseMoveLocation from "@hooks/useMouseLocation"
import { useFrame } from "@react-three/fiber"

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

    // useHelper(spotLightRef.current && spotLightRef, SpotLightHelper, "#000") // INTENTIONAL COMMENT: Helper for spotLight
    // useHelper(dirLight.current && dirLight, DirectionalLightHelper) // INTENTIONAL COMMENT: Helper for dirLight

    const init = async () => {
        const dat = await import("dat.gui")
        const gui = new dat.GUI()

        const spotLight = spotLightRef.current

        function buildGui() {
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

        // spotLight.color = new THREE.Color(0xffe000)
        spotLight.intensity = 4
        spotLight.distance = 6
        spotLight.angle = 0.5
        spotLight.penumbra = 0.1
        spotLight.decay = 2
        spotLight.shadow.focus = 0.5
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        const V = new Vector3()
        parentObjectForSpotlight.getWorldPosition(V)
        spotLightRef.current.position.copy(V)

        gsap.to(spotLightRef.current.position, {
            x: V.x,
            y: V.y,
            z: V.z,
        })
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
                intensity={1}
                castShadow
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                shadow-bias={-0.000175}
            />

            <ambientLight intensity={0.3} />

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

    useFrame(() => {
        if (gltf) {
            const hourHand = findMeshByName(gltf, "hour-hand")
            const minHand = findMeshByName(gltf, "min-hand")
            const secHand = findMeshByName(gltf, "sec-hand")

            const date = new Date()

            const time = {
                sec: date.getSeconds(),
                min: date.getMinutes(),
                hour: date.getHours(),
            }

            hourHand.rotation.y = -time.hour * ((2 * Math.PI) / 24)
            minHand.rotation.y = -time.min * ((2 * Math.PI) / 60)
            secHand.rotation.y = -time.sec * ((2 * Math.PI) / 60)
        }
    })

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

        const sex = findMeshByName(gltf, "sex")

        ;(sex as THREE.Mesh).castShadow = false

        sex.visible = false

        setSpotLightTarget(sex)
    }

    useEffect(() => {
        init()
    }, [gltf])

    useEffect(() => {
        if (gltf) {
            const lampNeck = findMeshByName(gltf, "lamp-neck")

            const lampPivot3 = findMeshByName(gltf, "lamppivot3")
            const lampPivot2 = findMeshByName(gltf, "lamppivot2")
            const lampPivot1 = findMeshByName(gltf, "lamppivot1")

            const lampBase = findMeshByName(gltf, "lampbase")

            gsap.to(lampNeck.rotation, { y: mouseData[0] })

            gsap.to(lampPivot3.rotation, {
                y: -mouseData[1] * 1.5 + 0.5,
            })
            gsap.to(lampPivot2.rotation, {
                y: -mouseData[1] * 0.5 + 1.5,
            })
            gsap.to(lampPivot1.rotation, {
                y: -mouseData[1] * 0.25 + 0.75,
            })

            gsap.to(lampBase.rotation, { y: -mouseData[0] })
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
