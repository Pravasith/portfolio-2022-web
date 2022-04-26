import { random20Id } from "@utils/index"
import React from "react"
import { ETextSubElements, SpanifiedTextProps } from "./interface"

const SpanifiedText = ({ text, spanColorClassName }: SpanifiedTextProps) => {
    let tempText = text
    const finalJSXElements: JSX.Element[] = []

    const splitBreaks = (str: string) => {
        const splitArray = str.split(ETextSubElements.BREAK_EL_MARK)
        const splitArrayWithAddedBRs = splitArray.reduce(
            (all: JSX.Element[], item, i) => {
                if (i === 0)
                    all.push(
                        <React.Fragment key={`text-break-${random20Id()}`}>
                            {item}
                        </React.Fragment>
                    )
                else
                    all.push(
                        <br key={`text-break-${random20Id()}`} />,
                        <React.Fragment key={`text-break-${random20Id()}`}>
                            {item}
                        </React.Fragment>
                    )

                return all
            },
            []
        )

        return splitArrayWithAddedBRs
    }

    const spanify = () => {
        if (tempText.indexOf(ETextSubElements.START_SPAN_EL_MARK) === -1) {
            finalJSXElements.push(
                <React.Fragment key={`text-element-${random20Id()}`}>
                    {splitBreaks(tempText)}
                </React.Fragment>
            )
            return
        }

        const preString = tempText.split(
                ETextSubElements.START_SPAN_EL_MARK
            )[0],
            spanString = tempText.slice(
                tempText.indexOf(ETextSubElements.START_SPAN_EL_MARK) +
                    ETextSubElements.START_SPAN_EL_MARK.length,
                tempText.indexOf(ETextSubElements.END_SPAN_EL_MARK)
            ),
            postString = tempText.slice(
                tempText.indexOf(ETextSubElements.END_SPAN_EL_MARK) +
                    ETextSubElements.END_SPAN_EL_MARK.length
            )

        finalJSXElements.push(
            <React.Fragment key={`text-element-${random20Id()}`}>
                {splitBreaks(preString)}
            </React.Fragment>,

            <span
                key={`text-element-${random20Id()}`}
                className={`font-calibre-semibold ${spanColorClassName}`}
            >
                {splitBreaks(spanString)}
            </span>
        )

        tempText = postString

        spanify()
    }

    spanify()

    return <>{finalJSXElements}</>
}

export default SpanifiedText
