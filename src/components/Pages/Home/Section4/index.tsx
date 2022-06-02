import { Doflamingo } from "@components/Models"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useInView } from "react-intersection-observer"
import { Vector3 } from "three"

const DisableRender = () => useFrame(() => null, 1000)

const Section4 = () => {
    const { ref, inView } = useInView()
    const cameraPosition = {
        initial: new Vector3(0, 0, 6),
    }

    function Box() {
        // Subscribe this component to the render-loop, rotate the mesh every frame
        // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
        // Return the view, these are regular Threejs elements expressed in JSX
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"orange"} />
            </mesh>
        )
    }

    return (
        <div className="section-4-container flex-col-center w-full  h-screen">
            <div className="w-full h-full  flex-col-south ">
                <div ref={ref} className={`w-full h-1/2 `}>
                    <Canvas
                        linear={false}
                        shadows
                        camera={{
                            position: cameraPosition.initial,
                            fov: 45,
                        }}
                    >
                        {!inView && <DisableRender />}
                        <OrbitControls
                        // enableZoom={false}
                        // enableRotate={false}
                        // enablePan={false}
                        />

                        <Suspense fallback={null}>
                            <Doflamingo />
                        </Suspense>
                        <Box />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Section4
