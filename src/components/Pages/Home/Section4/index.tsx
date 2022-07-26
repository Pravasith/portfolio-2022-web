import { Doflamingo, StreetSign } from "@components/Models"
import {
    PinkCircle,
    Plants,
    WaterPuddle,
    YellowBackground,
} from "@components/SVGs/HomeSection4"
import Button from "@components/UI/Button"
import TextGroup from "@components/UI/TextGroup"
import { ETextAlign } from "@lib/api/textGroups/interface"

import { Canvas, useFrame } from "@react-three/fiber"
import { FormEvent, Suspense, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Vector3 } from "three"
import { SectionProps } from "@components/Pages/Home/interface"
import { useForm } from "@hooks/useForm"
import TextArea from "@components/UI/TextArea"
import { validateEmail } from "@utils/index"

const DisableRender = () => useFrame(() => null, 1000)

const Section4 = ({ textBlocks }: SectionProps) => {
    const { ref, inView } = useInView()
    const cameraPosition = {
        initial: new Vector3(7.27, 0.65, -0.2),
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const { values, handler } = useForm<Record<string, string>>({})

    const [formValidation, setFormValidation] = useState({
        email: false,
        message: false,
    })

    const [showEmailErrors, setShowEmailErrors] = useState(false)
    const [showMessageErrors, setShowMessageErrors] = useState(false)

    useEffect(() => {
        if (values.email !== undefined) {
            setShowEmailErrors(true)
            setFormValidation({
                ...formValidation,
                email: !!validateEmail(values.email.trim()),
            })
        }
    }, [values.email])

    useEffect(() => {
        if (values.message !== undefined) {
            setShowMessageErrors(true)
            setFormValidation({
                ...formValidation,
                message: !!values.message.trim(),
            })
        }
    }, [values.message])

    const isFormValidated = formValidation.email && formValidation.message

    return (
        <div className="section-4-container flex-col-center w-full h-screen">
            <div className="w-full h-full flex-col-south ">
                {/* TEXT BLOCK */}
                <div className="section-4-text-block w-1/3 ">
                    <div className="mx-5">
                        <TextGroup
                            textAlign={ETextAlign.LEFT}
                            textBlocks={textBlocks}
                        />
                    </div>

                    <div className=" w-full flex-col-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex-row-west w-full">
                                <TextArea
                                    name="name"
                                    placeholder="Your Name"
                                    onChange={handler}
                                    className={"w-full"}
                                />

                                <TextArea
                                    name="email"
                                    placeholder="Your email id"
                                    onChange={handler}
                                    className={"w-full"}
                                    showError={
                                        showEmailErrors && !formValidation.email
                                    }
                                />
                            </div>

                            <TextArea
                                name="message"
                                placeholder="Hey Pravas, I think your work is okay. But I'd like to get in touch with you for..."
                                onChange={handler}
                                rows={4}
                                className={"w-full"}
                                showError={
                                    showMessageErrors && !formValidation.message
                                }
                            />

                            <div className="mx-5">
                                {
                                    <Button
                                        // className={
                                        //     !isFormValidated ? "opacity-0" : ""
                                        // }
                                        disabled={!isFormValidated}
                                        type="submit"
                                        text={"Send"}
                                    />
                                }
                            </div>
                        </form>
                    </div>
                </div>

                <div className="absolute overflow-hidden w-full bottom-0 h-1/3 -z-10">
                    <div className="relative w-full h-full">
                        <div className="absolute left-0 bottom-0 w-full">
                            <YellowBackground />
                        </div>
                    </div>
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
