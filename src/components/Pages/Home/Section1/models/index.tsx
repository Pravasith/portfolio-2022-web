import { useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { Object3D, Vector3 } from "three"
import * as THREE from "three"
import { findMeshByName } from "@utils/index"
import gsap, { Sine } from "gsap"
import useMouseMove from "@hooks/useMouseMove"
import { useFrame, useThree } from "@react-three/fiber"
import { LightsProps } from "./interface"
import { MouseMoveValues } from "@hooks/useMouseMove/interface"
import useScrollTrigger from "@hooks/useScroll"

const Lights = ({ parentObjectForSpotlight, spotlightTarget }: LightsProps) => {
    const spotLightRef = useRef<THREE.SpotLight>(new THREE.SpotLight())
    const dirLight = useRef<THREE.DirectionalLight>(
        new THREE.DirectionalLight()
    )

    // useHelper(spotLightRef.current && spotLightRef, SpotLightHelper, "#000") // INTENTIONAL COMMENT: Helper for spotLight
    // useHelper(dirLight.current && dirLight, DirectionalLightHelper) // INTENTIONAL COMMENT: Helper for dirLight

    const init = async () => {
        // const dat = await import("dat.gui")
        // const gui = new dat.GUI()

        // function buildGui() {
        //     const params = {
        //         "light color": spotLight.color.getHex(),
        //         intensity: spotLight.intensity,
        //         distance: spotLight.distance,
        //         angle: spotLight.angle,
        //         penumbra: spotLight.penumbra,
        //         decay: spotLight.decay,
        //         focus: spotLight.shadow.focus,
        //     }

        //     gui.addColor(params, "light color").onChange(function (val) {
        //         spotLight.color.setHex(val)
        //     })

        //     gui.add(params, "intensity", 0, 2).onChange(function (val) {
        //         spotLight.intensity = val
        //     })

        //     gui.add(params, "distance", 0, 200).onChange(function (val) {
        //         spotLight.distance = val
        //     })

        //     gui.add(params, "angle", 0, Math.PI / 3).onChange(function (val) {
        //         spotLight.angle = val
        //     })

        //     gui.add(params, "penumbra", 0, 1).onChange(function (val) {
        //         spotLight.penumbra = val
        //     })

        //     gui.add(params, "decay", 1, 2).onChange(function (val) {
        //         spotLight.decay = val
        //     })

        //     gui.add(params, "focus", 0, 1).onChange(function (val) {
        //         spotLight.shadow.focus = val
        //     })

        //     gui.open()
        // }

        // buildGui()

        const spotLight = spotLightRef.current

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

    const animateSpotLight = () => {
        if (spotLightRef.current) {
            const V = new Vector3()
            parentObjectForSpotlight.getWorldPosition(V)
            spotLightRef.current.position.copy(V)

            gsap.to(spotLightRef.current.position, {
                x: V.x,
                y: V.y,
                z: V.z,

                duration: 2,
                ease: "power4.out",
            })
        }
    }

    useMouseMove(animateSpotLight)

    return (
        <>
            <directionalLight
                ref={dirLight}
                position={[2, 2, 2]}
                intensity={0.8}
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

    const [models, setModels] = useState<Record<string, Object3D<THREE.Event>>>(
        {}
    )

    const animateDeskLamp = (mouseData: MouseMoveValues) => {
        if (!!Object.keys(models).length) {
            const { lampNeck, lampPivot3, lampPivot2, lampPivot1, lampBase } =
                models

            gsap.to(lampNeck.rotation, { y: mouseData[0], duration: 1 })

            gsap.to(lampPivot3.rotation, {
                y: -mouseData[1] * 1.5 + 0.5,
                duration: 1,
            })
            gsap.to(lampPivot2.rotation, {
                y: -mouseData[1] * 0.5 + 1.5,
                duration: 1,
            })
            gsap.to(lampPivot1.rotation, {
                y: -mouseData[1] * 0.25 + 0.75,
                duration: 1,
            })

            gsap.to(lampBase.rotation, { y: -mouseData[0], duration: 1 })
        }
    }

    useMouseMove(animateDeskLamp)

    const { camera } = useThree()

    const clockHands = useRef<Object3D<THREE.Event>[]>()

    const animateClock = (date: Date) => {
        if (gltf && clockHands.current) {
            const [hourHand, minHand, secHand] = clockHands.current

            const time = {
                sec: date.getSeconds(),
                min: date.getMinutes(),
                hour: date.getHours(),
            }

            hourHand.rotation.y = -time.hour * 2 * ((2 * Math.PI) / 24)
            minHand.rotation.y = -time.min * ((2 * Math.PI) / 60)
            secHand.rotation.y = -time.sec * ((2 * Math.PI) / 60)
        }
    }

    useFrame(() => {
        const date = new Date()
        animateClock(date)
    })

    const init = async () => {
        // const dat = await import("dat.gui")
        // const gui = new dat.GUI()
        // ... rest of the three.js code

        const laptopScreenInitAndAnimate = () => {
            const laptopScreenPixels = findMeshByName(gltf, "laptop-screen"),
                laptopScreenPanel = findMeshByName(gltf, "laptopbase001")

            gsap.to(laptopScreenPanel.rotation, { x: 1.4, duration: 4 })

            const texture = new THREE.TextureLoader().load(
                "textures/sprite-laptop.png"
            )

            texture.wrapS = THREE.RepeatWrapping
            texture.wrapT = THREE.RepeatWrapping

            const INITIAL_X_VALUE = -0.054,
                STEP_VALUE = 0.11111

            const material = new THREE.MeshPhongMaterial({
                emissive: "#fff",
                emissiveMap: texture,
                emissiveIntensity: 0.5,
            })

            material.map = texture

            if (material.map) {
                const { offset, repeat } = material.map

                offset.x = INITIAL_X_VALUE
                offset.y = 0.99
                repeat.x = 0.44
                repeat.y = 4.04

                material.map.flipY = false

                const changeWallpaper = () => {
                    gsap.to(offset, {
                        x: "+=" + STEP_VALUE,
                        duration: 1,
                        onComplete: changeWallpaper,
                        delay: 1.5,
                    })
                }

                changeWallpaper()
            }

            ;(laptopScreenPixels as THREE.Mesh).material = material
        }

        const animatePencil = () => {
            const pencil = findMeshByName(gltf, "pencil")

            const tl = gsap.timeline({ repeat: -1, ease: Sine.easeIn })
            const Y_ROT_PENCIL = 0.5
            gsap.set(pencil.rotation, {
                y: -Y_ROT_PENCIL,
            })

            tl.to(pencil.rotation, {
                y: Y_ROT_PENCIL,
                duration: 5,
            }).to(pencil.rotation, {
                y: -Y_ROT_PENCIL,
                duration: 5,
            })
        }

        const deskLightInitAndAnimate = () => {
            const deskLight = findMeshByName(gltf, "light-shine")

            ;(deskLight as THREE.Mesh).material = new THREE.MeshPhongMaterial({
                emissive: "#fff",
                emissiveIntensity: 1,
            })

            setDeskLightParent(deskLight)

            const lightMirror = findMeshByName(gltf, "sex")

            ;(lightMirror as THREE.Mesh).castShadow = false

            lightMirror.visible = false

            setSpotLightTarget(lightMirror)
        }

        const clockHandsInit = () => {
            const hourHand = findMeshByName(gltf, "hour-hand")
            const minHand = findMeshByName(gltf, "min-hand")
            const secHand = findMeshByName(gltf, "sec-hand")

            clockHands.current = [hourHand, minHand, secHand]
        }

        const saveModelsInState = () => {
            const lampNeck = findMeshByName(gltf, "lamp-neck")

            const lampPivot3 = findMeshByName(gltf, "lamppivot3")
            const lampPivot2 = findMeshByName(gltf, "lamppivot2")
            const lampPivot1 = findMeshByName(gltf, "lamppivot1")

            const lampBase = findMeshByName(gltf, "lampbase")

            const pencil = findMeshByName(gltf, "pencil")

            setModels({
                lampNeck,
                lampPivot3,
                lampPivot2,
                lampPivot1,
                lampBase,
                pencil,
            })
        }

        saveModelsInState()
        laptopScreenInitAndAnimate()
        deskLightInitAndAnimate()
        clockHandsInit()
        animatePencil()
    }

    useEffect(() => {
        init()
    }, [gltf])

    useScrollTrigger(
        gsapX => {
            const scrollTrigger = {
                trigger: ".section-1-container",
                start: "top top",
                end: "bottom center",
                // markers: true,
                scrub: 0.5,
                pin: true,
            }

            gsapX.to(camera.position, {
                scrollTrigger,
                x: 2.56,
                y: 4.86,
                z: 5.86,
                duration: 3,
            })
        },
        [gltf]
    )

    // INTENTIONAL COMMENT: Rollback
    // useEffect(() => {
    //     const init = async () => {
    //         const { ScrollTrigger } = await import("gsap/ScrollTrigger")
    //         gsap.registerPlugin(ScrollTrigger)

    //         const scrollTrigger = {
    //             trigger: ".section-1-container",
    //             start: "top top",
    //             end: "bottom center",
    //             // markers: true,
    //             scrub: 1,
    //             pin: true,
    //         }

    //         gsap.to(camera.position, {
    //             scrollTrigger,
    //             x: 2.56,
    //             y: 4.86,
    //             z: 5.86,
    //             duration: 3,
    //         })

    //         gsap.to(".section-1-red-triangle", { scrollTrigger, y: 20 })
    //         gsap.to(".section-1-bgd-beach-1", { scrollTrigger, y: -50 })
    //     }

    //     if (gltf) init()
    // }, [gltf])

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
