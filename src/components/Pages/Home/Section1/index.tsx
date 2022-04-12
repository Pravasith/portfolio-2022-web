import { Suspense } from "react"

import { ETextColorClassNames } from "@lib/themes/colors"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import {
    Section1BgdBeach,
    Section1BgdBeach1,
    Section1RedTriangles,
} from "./svgs"
import { Vector3 } from "three"

import { Table } from "./models"

const textBlock: TextBlockType[] = [
    {
        type: ETextTypes.H3,
        text: "Hi there!",
        spanColorClassName: ETextColorClassNames.TEXT_RED_100,
        textColorClassName: ETextColorClassNames.LIGHT_THEME_TEXT_200,
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
        text: "(noun):  Someone who gets excited to solve :span:>business problems<:span: using :span:>experience design techniques<:span: and by building :span:>loosely coupled software-architecture<:span:.",
    },
]

const Section1 = () => {
    const cameraPosition = {
        initial: new Vector3(-3.3, 1, 4.8),
    }

    return (
        <>
            <div className="section-1-container h-screen relative">
                {/* SVG */}
                <div className="absolute w-full top-1/3">
                    <div className="flex-row-center w-full">
                        <div className="w-2/3 relative">
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
                <div className="section-1-text-block absolute top-1/5 left-1/2 w-96">
                    <TextBlock textBlock={textBlock} />
                </div>
            </div>
        </>
    )
}

export default Section1
