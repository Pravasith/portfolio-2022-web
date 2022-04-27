import { Suspense } from "react"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextAlign, ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import {
    Section1BgdBeach,
    Section1BgdBeach1,
    Section1RedTriangles,
} from "./svgs"
import { Vector3 } from "three"

import { Table } from "./models"
import useScrollTrigger from "@hooks/useScroll"

const textBlock: TextBlockType[] = [
    {
        type: ETextTypes.H1,
        text: `A Product Designer :br: turned:br: Software Engineer .`,
    },

    {
        type: ETextTypes.P,
        text: "I'm Pravas, a :span:>TypeScript/JavaScript<:span: developer:br: who is passionate about delivering the best :br::span:>🎨 User Experiences<:span: & loves :span:>👨‍💻 optimizing data<:span: by utilizing data structures and writing algorithms.",
    },
]

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
            scrub: 1,
            pin: true,
        }

        gsapX.to(".section-1-red-triangle", {
            scrollTrigger,
            y: 120,
            scale: 1.2,
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
            y: -80,
            yoyo: true,
        })
    }, [])

    return (
        <>
            <div className="section-1-container h-screen relative">
                {/* SVG */}
                <div className="absolute w-full top-1/3">
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
                <div className="absolute w-full h-full top-1/10">
                    <Canvas
                        linear={false}
                        shadows
                        camera={{
                            position: cameraPosition.initial,
                            fov: 45,
                        }}
                    >
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

                {/* TRIANGLES */}
                <div className="section-1-red-triangle absolute w-1/5 h-1/5 bottom-1/10 left-1/3">
                    <Section1RedTriangles />
                </div>

                {/* TEXT */}
                <div className="section-1-text-block absolute top-1/8 right-1/10 w-1/3">
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={textBlock}
                    />
                </div>
            </div>
        </>
    )
}

export default Section1
