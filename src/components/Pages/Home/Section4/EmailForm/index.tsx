import { TickMarkGraphic } from "@components/SVGs/EmailForm"
import Button from "@components/UI/Button"
import TextArea from "@components/UI/TextArea"
import TextGroup from "@components/UI/TextGroup"
import { useForm } from "@hooks/useForm"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@lib/api/textGroups/interface"
import api from "@services/api"
import { BASE_URLS } from "@services/routes"
import { validateEmail } from "@utils/index"
import { useState, useEffect, FormEvent } from "react"

interface EmailFormType {
    emailFormTextBlocks: TextBlockType[]
}

const EmailForm = (props: EmailFormType) => {
    const { values, handler } = useForm<Record<string, string>>({})

    const [formValidation, setFormValidation] = useState({
        email: false,
        message: false,
    })

    const isFormValidated = formValidation.email && formValidation.message

    const [showEmailErrors, setShowEmailErrors] = useState(false)
    const [showMessageErrors, setShowMessageErrors] = useState(false)
    const [showAPILoading, setShowAPILoading] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isFormValidated) {
            setShowAPILoading(true)

            await api.POST(BASE_URLS.EMAIL, values)

            setShowAPILoading(false)
            setEmailSent(true)
        }
    }

    return (
        <div
            id="home-section-4-email-form"
            className={`
                w-full px-6
                tablet:px-1/5
                laptop:px-[25%]
                desktop:px-[30%]
                full-hd:px-[33.33%]
            `}
        >
            {!emailSent ? (
                <div className="w-full email-form">
                    <div>
                        <TextGroup
                            textAlign={ETextAlign.LEFT}
                            textBlocks={props.emailFormTextBlocks}
                        />
                    </div>

                    <div className=" w-full flex-col-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex-row-west w-full">
                                <TextArea
                                    name="name"
                                    placeholder="Your Name"
                                    onChange={handler}
                                    className={"w-full mr-2"}
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

                            <div className="mx-1">
                                {
                                    <Button
                                        disabled={!isFormValidated}
                                        type="submit"
                                        text="Send"
                                        showLoading={showAPILoading}
                                    />
                                }
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="w-full flex-col-center my-10">
                    <div className="w-48 h-48 mb-10">
                        <TickMarkGraphic />
                    </div>

                    <TextGroup
                        textAlign={ETextAlign.CENTER}
                        textBlocks={[
                            {
                                type: ETextTypes.H3,
                                text: "I got your email, please allow me a day or two to respond :)",
                            },
                        ]}
                    />
                </div>
            )}
        </div>
    )
}

export default EmailForm
