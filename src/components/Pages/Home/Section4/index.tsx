import { Doflamingo, StreetSign } from "@components/Models"
import {
    PinkCircle,
    Plants,
    WaterPuddle,
    YellowBackground,
} from "@components/SVGs/HomeSection4"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useInView } from "react-intersection-observer"
import { Vector3 } from "three"
import { SectionProps } from "@components/Pages/Home/interface"
import EmailForm from "@components/Pages/Home/Section4/EmailForm"

const DisableRender = () => useFrame(() => null, 1000)

const Section4 = ({ textBlocks }: SectionProps) => {
    const { ref, inView } = useInView()
    const cameraPosition = {
        initial: new Vector3(7.27, 0.65, -0.2),
    }

    return (
        <div className="section-4-container flex-col-center w-full h-screen">
            <div className="w-full h-full flex-col-south ">
                <div className="section-4 w-1/3 ">
                    <EmailForm emailFormTextBlocks={textBlocks} />
                </div>

                <div className="absolute overflow-hidden w-full bottom-0 h-1/3 -z-10">
                    <div className="relative w-full h-full">
                        <div className="absolute left-0 bottom-0 w-full">
                            <YellowBackground />
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-1/2">
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

                    <div className="absolute w-72 bottom-2 left-1/5 -z-10">
                        <WaterPuddle />
                    </div>

                    <div className="absolute w-36 top-1/5 right-2/3">
                        <Plants />
                    </div>

                    <div className="absolute w-36 top-5 left-1/2 -z-10">
                        <PinkCircle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
