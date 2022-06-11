import { Doflamingo, StreetSign } from "@components/Models"
import {
    PinkCircle,
    Plants,
    WaterPuddle,
    YellowBackground,
} from "@components/SVGs/HomeSection4"
import Button from "@components/UI/Button"
import TextBlock from "@components/UI/TextBlock"
import { ETextAlign, ETextTypes } from "@components/UI/TextBlock/interface"

import { Canvas, useFrame } from "@react-three/fiber"
import { ChangeEvent, FormEvent, Suspense, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Vector3 } from "three"

const DisableRender = () => useFrame(() => null, 1000)

const Section4 = () => {
    const { ref, inView } = useInView()
    const cameraPosition = {
        initial: new Vector3(7.27, 0.65, -0.2),
    }

    const [message, setMessage] = useState<string>("")

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const textBlock = [
        {
            type: ETextTypes.H1,
            text: `Write to me!`,
        },
    ]

    return (
        <div className="section-4-container flex-col-center w-full h-screen">
            <div className="w-full h-full flex-col-south ">
                {/* TEXT BLOCK */}
                <div className="section-4-text-block w-1/3 ">
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={textBlock}
                    />

                    <div className=" w-full flex-col-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <textarea
                                placeholder="Hey Pravas, I think your work is okay. But I'd like to get in touch with you for..."
                                rows={4}
                                className="border-4 border-black p-4 rounded-3xl w-full "
                                value={message}
                                onChange={handleChange}
                            />

                            <Button type="submit" text={"Send"} />
                        </form>
                    </div>
                </div>

                <div className="absolute w-full bottom-0 -z-10">
                    <YellowBackground />
                </div>

                <div className="relative w-1/2 h-1/2 mt-12">
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
