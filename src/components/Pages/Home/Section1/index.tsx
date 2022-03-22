import { Suspense, useEffect, useRef } from "react"
import * as THREE from "three"

import { ETextColorClassNames } from "@lib/themes/colors"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"
import gsap from "gsap"
import { Section1BgdBeach } from "./images"

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
//     useFrame(() => (mesh.current.rotation.x += 0.01))

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

    useEffect(() => {
        gltf.scene.traverse(o => {
            if (o.name === "Laptop001") {
                gsap.to(o.rotation, { x: -1.4, duration: 4 })
            }

            console.log(o.name)
        })
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
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={2} />
        </>
    )
}

const Section1 = () => {
    return (
        <>
            <div className="h-screen relative">
                <div className="absolute w-full top-1/4">
                    <div className="flex-row-center w-full">
                        <div className="w-2/3">
                            <Section1BgdBeach />
                        </div>
                    </div>
                </div>

                <div className="absolute w-full h-full top-1/12">
                    <Canvas
                        linear={false}
                        // orthographic
                        camera={{ position: [4, 5, 5], fov: 45 }}
                    >
                        <OrbitControls />

                        {/* <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} /> */}

                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="absolute top-1/5 left-2/3">
                    <TextBlock textBlock={textBlock} />
                </div>
            </div>
        </>
    )
}

export default Section1
