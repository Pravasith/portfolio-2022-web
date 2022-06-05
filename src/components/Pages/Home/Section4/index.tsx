import { Doflamingo, StreetSign } from "@components/Models"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useInView } from "react-intersection-observer"
import { Vector3 } from "three"

const DisableRender = () => useFrame(() => null, 1000)

const Section4 = () => {
    const { ref, inView } = useInView()
    const cameraPosition = {
        initial: new Vector3(7.27, 0.65, -0.2),
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
                        // onCreated={state => state.gl.setClearColor("#CCC")}
                    >
                        {!inView && <DisableRender />}
                        <OrbitControls

                        // enableZoom={false}
                        // enableRotate={false}
                        // enablePan={false}
                        />

                        <Suspense fallback={null}>
                            <Doflamingo />
                            <StreetSign />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Section4
