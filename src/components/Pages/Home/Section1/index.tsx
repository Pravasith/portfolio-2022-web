import { Suspense, useEffect, useRef } from "react"
import * as THREE from "three"

import { ETextColorClassNames } from "@lib/themes/colors"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import { Section1BgdBeach, Section1BgdBeach1 } from "./images"
import { Vector3 } from "three"

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

const Model = () => {
    const gltf = useGLTF("/gltfs/table.gltf")

    const init = async () => {
        const dat = await import("dat.gui")
        const gui = new dat.GUI()
        // ... rest of the three.js code

        const texture = new THREE.TextureLoader().load(
            "textures/red-screen.png"
        )

        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping

        // texture.offset.set(u, v)
        // texture.repeat.set(zoomX, zoomY)
        // texture.flipY = flipY
        // texture.rotation = textureRotation

        // newMaterial.map = texture
        // mesh.material = newMaterial

        const material = new THREE.MeshBasicMaterial({ map: texture })

        if (material.map) {
            gui.add(material.map.offset, "x", 0, 5, 0.1)
            gui.add(material.map.offset, "y", 0, 5, 0.1)
            gui.add(material.map.repeat, "x", 0, 5, 0.1)
            gui.add(material.map.repeat, "y", 0, 5, 0.1)
            // material.map.repeat.
        }

        if (material.map) {
            const { offset, repeat } = material.map

            offset.x = 3.2
            offset.y = 1.6

            repeat.x = repeat.y = 5
        }

        // gltf.scene.traverse(o => {
        //     if (o.name === "Laptop001") {
        //         gsap.to(o.rotation, { x: -1.4, duration: 4 })
        //     } else if (o.name === "laptop-screen") {
        //         ;(o as THREE.Mesh).material = material

        //         console.log((o as THREE.Mesh).material)
        //     }
        // })
    }

    useEffect(() => {
        init()
    }, [gltf])

    const dirLight = useRef<THREE.DirectionalLight>()

    return (
        <>
            <directionalLight
                ref={dirLight}
                position={[-2, 5, 2]}
                intensity={1}
                castShadow
            />
            <ambientLight intensity={0.25} />
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={2.125} />
        </>
    )
}

const Section1 = () => {
    const cameraPosition = {
        initial: new Vector3(-3.17, 3.7, 5.97),
    }

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
                        // orthographic
                        camera={{
                            position: cameraPosition.initial,
                            fov: 45,
                        }}
                    >
                        <OrbitControls />

                        {/* <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} /> */}

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
