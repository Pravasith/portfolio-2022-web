import { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"

import { ETextColorClassNames } from "@lib/themes/colors"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import { Section1BgdBeach, Section1BgdBeach1 } from "./images"
import { Vector3 } from "three"
import gsap from "gsap"
import { randoInt } from "@utils/index"

const textBlock: TextBlockType[] = [
    {
        type: ETextTypes.H3,
        text: "Hi there!",
        spanColorClassName: ETextColorClassNames.TEXT_RED_100,
        textColorClassName: ETextColorClassNames.LIGHT_THEME_TEXT_200,
    },
    {
        type: ETextTypes.H3,
        text: "I'm a full-stack",
    },
    {
        type: ETextTypes.H1,
        text: `Design-eer.`,
    },
    {
        type: ETextTypes.P,
        text: "(noun):  Someone who gets excited to solve :span:>business problems<:span: using :span:>experience design techniques<:span: and by building :span:>loosely coupled software-architecture<:span:.",
    },
]

// const Box = (props: JSX.IntrinsicElements["mesh"]) => {
//     const mesh = useRef<THREE.Mesh>(null!)
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)

//     const { camera } = useThree()

//     useFrame(() => {
//         mesh.current.rotation.x += 0.01

//         console.log(camera.position)
//     })

//     const dirLight = useRef<THREE.DirectionalLight>()

//     useHelper(dirLight, DirectionalLightHelper)

//     return (
//         <>
//             <mesh
//                 {...props}
//                 ref={mesh}
//                 scale={active ? 1.5 : 1}
//                 onClick={() => setActive(!active)}
//                 onPointerOver={() => setHover(true)}
//                 onPointerOut={() => setHover(false)}
//             >
//                 <boxGeometry args={[1, 1, 1]} />
//                 <meshStandardMaterial color={hovered ? "yellow" : "white"} />
//             </mesh>
//             <directionalLight
//                 ref={dirLight}
//                 color={"#29abe2"}
//                 position={[-2, 5, 2]}
//                 intensity={1}
//             />
//         </>
//     )
// }

// Inject soft shadow shader

// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 27,
//     rings: 11, // Rings (default: 11) must be a int
// })

const Model = () => {
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

        gltf.scene.traverse(o => {
            o.castShadow = true
            o.receiveShadow = true

            if (o.name === "laptopbase001") {
                gsap.to(o.rotation, { x: 1.4, duration: 4 })
            } else if (o.name === "laptop-screen") {
                // const material = (
                //     (o as THREE.Mesh).material as THREE.MeshBasicMaterial
                // ).clone()

                const material = new THREE.MeshPhongMaterial({
                    // emissive: "#dedede",
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

                    // gsap.to(offset, { x: getOffsetX() })
                }

                if (material.map) {
                    gui.add(material.map.offset, "x", -2, 2, 0.001)
                    gui.add(material.map.offset, "y", 0, 2, 0.01)
                    gui.add(material.map.repeat, "x", 0, 5, 0.001)
                    gui.add(material.map.repeat, "y", 0, 5, 0.01)
                }

                ;(o as THREE.Mesh).material = material
            } else if (o.name === "light-shine") {
                const V = new Vector3()

                o.getWorldPosition(V)

                setLightPos(V)
            }
        })
    }

    useEffect(() => {
        init()
    }, [gltf])

    return (
        <>
            <pointLight position={lightPos} color={"#FFF"} intensity={0.8} />
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={2.125} />
        </>
    )
}

const Section1 = () => {
    const cameraPosition = {
        initial: new Vector3(-3.17, 3.7, 5.97),
    }

    const dirLight = useRef<THREE.DirectionalLight>()

    return (
        <>
            <div className="h-screen relative">
                {/* SVG */}
                <div className="absolute w-full top-1/3">
                    <div className="flex-row-center w-full">
                        <div className="w-2/3 relative">
                            <Section1BgdBeach />
                            <div className="absolute w-1/5 h-1/5 top-1/4 right-1/10">
                                <Section1BgdBeach1 />
                            </div>
                        </div>
                    </div>
                </div>

                {/* THREE */}

                <div className="absolute w-full h-full top-1/10">
                    <Canvas
                        linear={false}
                        shadows
                        // orthographic
                        camera={{
                            position: cameraPosition.initial,
                            fov: 45,
                        }}
                    >
                        <OrbitControls />

                        <directionalLight
                            ref={dirLight}
                            position={[-2, 5, 2]}
                            intensity={0.5}
                            castShadow
                            shadow-mapSize-height={1024}
                            shadow-mapSize-width={1024}
                            shadow-bias={-0.000175}
                        />
                        <ambientLight intensity={0.25} />

                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                    </Canvas>
                </div>

                {/* TEXT */}
                <div className="absolute top-1/5 left-2/3">
                    <TextBlock textBlock={textBlock} />
                </div>
            </div>
        </>
    )
}

export default Section1
