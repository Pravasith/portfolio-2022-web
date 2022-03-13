import { random20Id } from "@utils/index"
import React from "react"

const Home = () => {
    enum ETextTypes {
        H3 = "h3",
        H1 = "h1",
        P = "p",
    }

    type TextBlockType = {
        type: ETextTypes
        text: string
    }

    interface TextBlockProps {
        textBlock: TextBlockType[]
        spanClass?: string
    }

    const SpanifiedText = ({ text }: { text: string; spanClass?: string }) => {
        let tempText = text
        const START_SPAN_EL_MARK = ":span:>",
            END_SPAN_EL_MARK = "<:span:",
            finalJSXElements: JSX.Element[] = []

        const spanify = () => {
            if (tempText.indexOf(START_SPAN_EL_MARK) === -1) {
                finalJSXElements.push(
                    <React.Fragment key={`text-element-${random20Id()}`}>
                        {tempText}
                    </React.Fragment>
                )
                return
            }

            const preString = tempText.split(START_SPAN_EL_MARK)[0],
                spanString = tempText.slice(
                    tempText.indexOf(START_SPAN_EL_MARK) +
                        START_SPAN_EL_MARK.length,
                    tempText.indexOf(END_SPAN_EL_MARK)
                ),
                postString = tempText.slice(
                    tempText.indexOf(END_SPAN_EL_MARK) + END_SPAN_EL_MARK.length
                )

            finalJSXElements.push(
                <React.Fragment key={`text-element-${random20Id()}`}>
                    {preString}
                </React.Fragment>,
                <span key={`text-element-${random20Id()}`}>{spanString}</span>
            )

            tempText = postString

            spanify()
        }

        spanify()

        return <>{finalJSXElements}</>
    }

    const TextBlock = ({ textBlock }: TextBlockProps) => {
        return (
            <>
                {textBlock.map((item, i) => {
                    switch (item.type) {
                        case ETextTypes.H1:
                            return (
                                <h1 key={`textblock-${random20Id()}-${i}`}>
                                    <SpanifiedText text={item.text} />
                                </h1>
                            )

                        case ETextTypes.H3:
                            return (
                                <h3 key={`textblock-${random20Id()}-${i}`}>
                                    <SpanifiedText text={item.text} />
                                </h3>
                            )

                        case ETextTypes.P:
                            return (
                                <p key={`textblock-${random20Id()}-${i}`}>
                                    <SpanifiedText text={item.text} />
                                </p>
                            )
                    }
                })}
            </>
        )
    }

    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H3,
            text: "Hi there!",
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
            text: "(noun):  Someone who deliberately :span:>combines the art of design<:span: with the art of programming. :span:>I like big butts and I cannot lie<:span: xx",
        },
    ]

    return (
        <div
            style={{ height: "200vh" }}
            className={`flex flex-row justify-center w-full h-full`}
        >
            <div className="w-3/5 h-screen">
                <TextBlock textBlock={textBlock} />
                <p></p>
                <h1></h1>
            </div>
        </div>
    )
}

export default Home
