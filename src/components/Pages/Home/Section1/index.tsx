import { ETextColorClassNames } from "@lib/themes/colors"
import { OrbitControls, useGLTF, useHelper } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"
import { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { DirectionalLightHelper } from "three"
// import HomeSection1Model from "./gltfs"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import HomeSection1Model from "./gltfs"

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
        text: "(noun):  Someone who deliberately :span:>combines the art of design<:span: with the art of programming. :span:>I like big butts and I cannot lie<:span: xx",
    },
]

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame(() => (mesh.current.rotation.x += 0.01))

    const dirLight = useRef<THREE.DirectionalLight>()

    useHelper(dirLight, DirectionalLightHelper)

    return (
        <>
            <mesh
                {...props}
                ref={mesh}
                scale={active ? 1.5 : 1}
                onClick={() => setActive(!active)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? "yellow" : "white"} />
            </mesh>
            <directionalLight
                ref={dirLight}
                color={"#29abe2"}
                position={[-2, 5, 2]}
                intensity={1}
            />
        </>
    )
}

const Model = () => {
    const gltf = useGLTF("/gltfs/desk2.gltf")

    useEffect(() => {
        console.log(gltf.scene)
    }, [gltf])

    const dirLight = useRef<THREE.DirectionalLight>()

    return (
        <>
            <directionalLight
                ref={dirLight}
                position={[-2, 5, 2]}
                intensity={1.5}
                castShadow
            />
            <ambientLight intensity={0.2} />
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={2} />
        </>
    )
}

const Section1 = () => {
    // const gltf = useLoader(GLTFLoader, "/modelDraco2.gltf")

    // const gltf = useGLTF("/gltfs/modelDraco2.gltf")

    return (
        <>
            <div className="h-screen">
                <TextBlock textBlock={textBlock} />
                <Canvas
                    linear={false}
                    // onCreated={({ gl }) => {
                    //     gl.toneMapping = THREE.NoToneMapping
                    // }}
                    // orthographic
                    camera={{ position: [10, 10, 10], fov: 40 }}
                >
                    <OrbitControls />

                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />

                    <Suspense fallback={null}>
                        {/* <HomeSection1Model /> */}
                        <Model />
                        {/* <Environment preset="sunset" /> */}
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}

export default Section1
