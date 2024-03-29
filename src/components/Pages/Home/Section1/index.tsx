import { Suspense } from "react"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"

import { useInView } from "react-intersection-observer"

import {
    Section1BgdBeach,
    Section1BgdBeach1,
    Section1RedTriangles,
} from "@svgs/HomeSection1"
import { Vector3 } from "three"

import { Table } from "@models/index"
// import useScrollTrigger from "@hooks/useScrollTrigger"

import { SectionProps } from "@components/Pages/Home/interface"
import TextGroup from "@components/UI/TextGroup"
import CanvasLoader from "@components/UI/CanvasLoader"

const DisableRender = () => useFrame(() => null, 1000)

const Section1 = ({ textBlocks }: SectionProps) => {
    const cameraPosition = {
        initial: new Vector3(-2.4, 1.59, 4.76),
        //         {
        //     "x": -2.507023254003685,
        //     "y": 1.594228266739427,
        //     "z": 4.764199370032023
        // }
    }

    const { ref, inView } = useInView()

    return (
        <>
            <div className="section-1-container min-h-screen mb-72">
                {/* TEXT BLOCK */}
                <div
                    className={`
                        flex-col-center px-6
                        mt-20 mb-10
                        tablet:px-1/5 tablet:mt-20
                        laptop:px-[25%] laptop:mt-20
                        desktop:px-[30%]
                        full-hd:px-[33.33%] full-hd:mt-8
                        true-hd:12 full-hd:mb-6
                        tv:mt-20
                    `}
                >
                    <div className="section-1-text-block w-full">
                        <TextGroup textBlocks={textBlocks} />
                    </div>
                </div>

                {/* GRAPHICS BLOCK */}
                <div
                    id="home-section-1-svgs-bgd"
                    className="section-1-graphics-block min-h-[30rem] h-1/2 w-full relative -z-10"
                >
                    {/* SVG */}
                    <div className="absolute w-full overflow-x-clip top-1/10 left-1/2 -translate-x-1/2 px-1/5">
                        <div
                            className={`
                                flex-row-center w-[250%] -translate-x-[30%] -translate-y-[10%]
                                tablet:w-[150%] tablet:-translate-x-[20%]
                                laptop:w-full laptop:translate-x-0 laptop:-translate-y-[2%]
                                desktop:w-[85%] desktop:translate-x-[5%]
                                full-hd:w-[80%] full-hd:translate-x-[10%] full-hd:translate-y-[10%]
                                true-hd:w-[72.5%] true-hd:translate-x-[15%] true-hd:translate-y-0
                            `}
                        >
                            <div className="section-1-bgd-beach-0 w-full relative">
                                <Section1BgdBeach />
                                <div className="section-1-bgd-beach-1 absolute w-1/5 h-1/5 top-1/4 right-1/10">
                                    <Section1BgdBeach1 />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THREE */}
                    <div
                        // id="home-section-1-three"
                        className={`
                            my-8 relative w-full h-[36rem]
                        `}
                    >
                        <div
                            ref={ref}
                            className={`
                                absolute w-full h-[180%] -bottom-[35%]

                                tablet:-bottom-[35.5%] tablet:h-[160%]

                                laptop:h-[180%] laptop:-bottom-[40.5%]

                                desktop:h-[185%] desktop:-bottom-[50.5%]

                                full-hd:h-[220%] full-hd:-bottom-[80%]
                            `}
                        >
                            <Canvas
                                // linear={false}
                                shadows
                                camera={{
                                    position: cameraPosition.initial,
                                    fov: 50,
                                    // zoom: 1.05,
                                }}
                            >
                                {!inView && <DisableRender />}

                                <OrbitControls
                                // enableZoom={false}
                                // enableRotate={false}
                                // enablePan={false}
                                />

                                <Suspense fallback={<CanvasLoader />}>
                                    <Table />
                                </Suspense>
                            </Canvas>
                        </div>

                        {/* <div
                            className={`
                                absolute w-full h-[160%] -bottom-[25%]
                                laptop:h-[180%] laptop:-bottom-[35%]
                            `}
                        ></div> */}

                        {/* TRIANGLES */}
                        <div
                            id="home-section-1-svgs-red"
                            className={`
                                section-1-red-triangle absolute w-60 h-1/5 bottom-[40%] -left-[10%] mx-8
                                tablet:left-[15%] tablet:bottom-[27.5%]
                                laptop:left-[18.5%] laptop:w-72 laptop:bottom-[35%]
                                desktop:left-[23.5%] desktop:bottom-[28.5%]
                                full-hd:left-[31%] full-hd:bottom-[15%]
                            `}
                        >
                            <Section1RedTriangles />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
