import { Doflamingo, StreetSign } from "@components/Models"
import {
    PinkCircle,
    Plants,
    WaterPuddle,
    YellowBackground,
} from "@components/SVGs/HomeSection4"
import Button from "@components/UI/Button"
import TextBlock from "@components/UI/TextBlock"
import { ETextAlign } from "@lib/api/textBlocks/interface"

import { Canvas, useFrame } from "@react-three/fiber"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { ChangeEvent, FormEvent, Suspense, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Vector3 } from "three"
import { SectionProps } from "@components/Pages/Home/interface"

const DisableRender = () => useFrame(() => null, 1000)

const Section4 = ({ textBlocks }: SectionProps) => {
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

    const { state } = useContext(ThemeContext)

    return (
        <div className="section-4-container flex-col-center w-full h-screen">
            <div className="w-full h-full flex-col-south ">
                {/* TEXT BLOCK */}
                <div className="section-4-text-block w-1/3 ">
                    <div className="mx-5">
                        <TextBlock
                            textAlign={ETextAlign.LEFT}
                            textBlock={textBlocks}
                        />
                    </div>

                    <div className=" w-full flex-col-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex-row-west w-full">
                                <textarea
                                    placeholder="Your Name"
                                    rows={1}
                                    className={`border-4 m-1 p-4 rounded-3xl  ${
                                        state?.currentTheme === EThemes.LIGHT
                                            ? "border-black bg-white"
                                            : "border-white bg-black"
                                    }`}
                                    value={message}
                                    onChange={handleChange}
                                />

                                <textarea
                                    placeholder="Your email id"
                                    rows={1}
                                    className={`border-4 m-1 p-4 rounded-3xl  ${
                                        state?.currentTheme === EThemes.LIGHT
                                            ? "border-black bg-white"
                                            : "border-white bg-black"
                                    }`}
                                    value={message}
                                    onChange={handleChange}
                                />
                            </div>

                            <textarea
                                placeholder="Hey Pravas, I think your work is okay. But I'd like to get in touch with you for..."
                                rows={4}
                                className={`border-4 p-4 m-1 rounded-3xl w-full ${
                                    state?.currentTheme === EThemes.LIGHT
                                        ? "border-black bg-white"
                                        : "border-white bg-black"
                                }`}
                                value={message}
                                onChange={handleChange}
                            />

                            <div className="mx-5">
                                <Button type="submit" text={"Send"} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="absolute w-full bottom-0 -z-10 overflow-hidden">
                    <YellowBackground />
                </div>

                <div className="relative w-1/2 h-1/2">
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
