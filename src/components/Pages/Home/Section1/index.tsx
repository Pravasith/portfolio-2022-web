import { Suspense } from "react"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextAlign, ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import { useInView } from "react-intersection-observer"

import {
    Section1BgdBeach,
    Section1BgdBeach1,
    Section1RedTriangles,
} from "@svgs/HomeSection1"
import { Vector3 } from "three"

import { Table } from "@models/index"
import useScrollTrigger from "@hooks/useScrollTrigger"

const textBlock: TextBlockType[] = [
    {
        type: ETextTypes.H1,
        text: `A Product Designer :br: turned:br: Software Engineer.`,
    },

    {
        type: ETextTypes.P,
        text: "Hey, I'm Pravas 👋🏼, a :span:>Full Stack TypeScript/JavaScript<:span: developer who is passionate about delivering the best :span:> User Experiences 🎨<:span: & loves :span:> optimizing data 🚀<:span: by utilizing data structures and writing algorithms.",
    },
]

const DisableRender = () => useFrame(() => null, 1000)

const Section1 = () => {
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
            y: 150,
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
            <div className="section-1-container h-screen mb-10">
                {/* TEXT BLOCK */}
                <div className="flex-col-center h-1/2">
                    <div className="section-1-text-block w-1/3 ">
                        <TextBlock
                            textAlign={ETextAlign.LEFT}
                            textBlock={textBlock}
                        />
                    </div>
                </div>

                {/* GRAPHICS BLOCK */}
                <div className="section-1-graphics-block  h-1/2 relative -z-10">
                    {/* SVG */}
                    <div className="absolute w-full top-0 left-1/2 -translate-x-1/2 px-1/5">
                        <div className="flex-row-center w-full">
                            <div className="section-1-bgd-beach-0 w-2/3 relative">
                                <Section1BgdBeach />
                                <div className="section-1-bgd-beach-1 absolute w-1/5 h-1/5 top-1/4 right-1/10">
                                    <Section1BgdBeach1 />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THREE */}
                    <div className="relative w-full h-full">
                        <div
                            ref={ref}
                            className="absolute w-full h-200% -bottom-1/2 "
                        >
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
                                    enableZoom={false}
                                    enableRotate={false}
                                    enablePan={false}
                                />

                                <Suspense fallback={null}>
                                    <Table />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>

                    {/* TRIANGLES */}
                    <div className="section-1-red-triangle absolute w-72 h-1/5 bottom-1/5 left-1/3 mx-8">
                        <Section1RedTriangles />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
