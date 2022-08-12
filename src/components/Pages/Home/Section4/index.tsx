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
        <div className="section-4-container mt-10 flex-col-center w-full min-h-screen">
            <div className="w-full h-full flex-col-south ">
                <div className="section-4 w-full">
                    <EmailForm emailFormTextBlocks={textBlocks} />
                </div>

                <div
                    id="yellow-footer-svg"
                    className="absolute overflow-hidden w-full bottom-0 h-1/3 -z-10"
                >
                    <div
                        className={`
                            relative w-[500%] h-full
                            md:w-[250%]
                            xl:w-[180%]
                        `}
                    >
                        <div className="absolute left-0 bottom-0 w-full">
                            <YellowBackground />
                        </div>
                    </div>
                </div>

                <div className="section-3-three-elements relative w-full h-[24.5rem] min-h-[24.5rem] overflow-x-clip ">
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

                            <Suspense fallback={null}>
                                <Doflamingo />
                                <StreetSign />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div
                        className={`
                        absolute w-72 bottom-2 left-[35%] -z-10
                        md:left-[45%]
                    `}
                    >
                        <WaterPuddle />
                    </div>

                    <div
                        className={`
                        absolute w-36 top-[20%] -z-10 -left-[5%]
                        md:left-[17.5%] md:top-[15%]
                        xl:left-[32%]
                    `}
                    >
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
