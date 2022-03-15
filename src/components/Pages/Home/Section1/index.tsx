import { OrbitControls, useHelper } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"
import { useRef, useState } from "react"
import { DirectionalLightHelper } from "three"

const textBlock: TextBlockType[] = [
    {
        type: ETextTypes.H3,
        text: "Hi there!",
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

const Section1 = () => {
    return (
        <>
            <div className="h-screen">
                <TextBlock textBlock={textBlock} />
                <Canvas
                    orthographic
                    camera={{ zoom: 50, position: [-50, -100, 50] }}
                >
                    <OrbitControls />

                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                </Canvas>
            </div>
        </>
    )
}

export default Section1
