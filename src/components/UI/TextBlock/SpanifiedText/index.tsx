import { random20Id } from "@utils/index"
import React from "react"
import { SpanifiedTextProps } from "./interface"

const SpanifiedText = ({ text, spanColorClassName }: SpanifiedTextProps) => {
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
            <span
                key={`text-element-${random20Id()}`}
                className={`font-calibre-bold ${spanColorClassName}`}
            >
                {spanString}
            </span>
        )

        tempText = postString

        spanify()
    }

    spanify()

    return <>{finalJSXElements}</>
}

export default SpanifiedText
