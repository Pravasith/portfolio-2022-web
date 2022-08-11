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
import useScrollTrigger from "@hooks/useScrollTrigger"

import { SectionProps } from "@components/Pages/Home/interface"
import TextGroup from "@components/UI/TextGroup"
import CanvasLoader from "@components/UI/CanvasLoader"

const DisableRender = () => useFrame(() => null, 1000)

const Section1 = ({ textBlocks }: SectionProps) => {
    const cameraPosition = {
        initial: new Vector3(-3.3, 1, 4.8),
    }

    useScrollTrigger(gsapX => {
        const scrollTrigger = {
            trigger: ".section-1-container",
            start: "top top",
            end: "bottom center",
            // markers: true,
            scrub: 0.5,
            pin: true,
        }

        gsapX.to(".section-1-red-triangle", {
            scrollTrigger,
            y: 100,
            scale: 1.085,
            yoyo: true,
        })
        gsapX.to(".section-1-bgd-beach-0", {
            scrollTrigger,
            y: 20,
            scale: 1.05,
            yoyo: true,
        })
        gsapX.to(".section-1-bgd-beach-1", {
            scrollTrigger,
            y: -100,
            yoyo: true,
        })
    }, [])

    const { ref, inView } = useInView()

    return (
        <>
            <div className="section-1-container min-h-screen mb-72">
                {/* TEXT BLOCK */}
                <div
                    className={`
                    flex-col-center px-6
                    md:px-1/5 md:mt-6
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
                            md:w-[150%] md:-translate-x-[20%]
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
                        id="home-section-1-three"
                        className="my-10 relative w-full h-full"
                    >
                        <div
                            ref={ref}
                            className="absolute w-full h-[160%] -bottom-[25%]"
                        >
                            <Canvas
                                linear={false}
                                shadows
                                camera={{
                                    position: cameraPosition.initial,
                                    fov: 45,
                                    zoom: 1.05,
                                }}
                            >
                                {!inView && <DisableRender />}
                                <OrbitControls
                                    enableZoom={false}
                                    enableRotate={false}
                                    enablePan={false}
                                />

                                <Suspense fallback={<CanvasLoader />}>
                                    <Table />
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className=" absolute w-full h-[160%] -bottom-[25%]"></div>
                    </div>

                    {/* TRIANGLES */}
                    <div
                        id="home-section-1-svgs-red"
                        className={`
                            section-1-red-triangle absolute w-60 h-1/5 bottom-1/5 -left-[10%] mx-8
                            md:left-[15%]
                        `}
                    >
                        <Section1RedTriangles />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
