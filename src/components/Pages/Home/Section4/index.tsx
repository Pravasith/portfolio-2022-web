import { Doflamingo, StreetSign } from "@components/Models"
import { WaterPuddle } from "@components/SVGs/HomeSection4"

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
        <div className="section-4-container flex-col-center w-full h-screen">
            <div className="w-full h-full flex-col-south ">
                <div className="relative w-full h-1/2 ">
                    <div ref={ref} className="w-full h-full">
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
                            {/* <OrbitControls

                        // enableZoom={false}
                        // enableRotate={false}
                        // enablePan={false}
                        /> */}

                            <Suspense fallback={null}>
                                <Doflamingo />
                                <StreetSign />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="absolute w-72 bottom-2 left-1/2 -z-10">
                        <WaterPuddle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
