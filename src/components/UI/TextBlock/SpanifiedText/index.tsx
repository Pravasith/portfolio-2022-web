import { random20Id } from "@utils/index"
import Link from "next/link"
import React from "react"
import {
    ESubTextMarkers,
    ETextTagMarkers,
    SpanifiedTextProps,
} from "./interface"

// enum ETextModifyType {
//     SPANIFY = "SPANIFY",
//     LINKIFY = "LINKIFY",
// }

// [asd, SSasddSS, LLSSasddaSSLL]

// asd{adas[daok]asdas}asdsd{asd}acs

const startMarkEncountered = (nextFourChars: string) => {
    return (
        nextFourChars === ESubTextMarkers.SPAN_START_MARK ||
        nextFourChars === ESubTextMarkers.LINK_START_MARK
    )
}

const endMarkEncountered = (nextFourChars: string) => {
    return (
        nextFourChars === ESubTextMarkers.SPAN_END_MARK ||
        nextFourChars === ESubTextMarkers.LINK_END_MARK
    )
}

const subElementEncountered = (nextFourChars: string) => {
    return nextFourChars === ESubTextMarkers.BREAK_EL_MARK
}

const splitBreaks = (str: string) => {
    const splitArray = str.split(ETextTagMarkers.BREAK_EL_MARK)
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

type Levels = Record<number, (JSX.Element | string)[]>

export const modifyText = (
    text: string
    // spanClassName?: string,
    // linkClassName?: string
) => {
    const stack: string[] = [],
        levels: Levels = {
            0: [],
        }

    let currentLevel = 0

    // Since there are only 2 kinds of tags, there's no need to use
    // a tree based-approach for this.

    // So I'm using a stack based approach.

    // 1. Initially: If it's plain text, or BR tag, just add as is to master (or level 0) array
    // 2. If encountered a Start tag, then add upcoming stuff to level 1 array with appropriate tags
    // 3. a. If closing tag is encountered, add upcoming stuff to the upper level array
    //    b. Else if another opening tag is encountered, add upcoming stuff to the lower level array.
    // 4. If stop tag is encountered in the lowest level array, empty it and push all stuff to upper array.
    // 5. Maintain a stack to track 2 levels (level 1, and level 2)

    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i]
        const nextFourChars = text[i] + text[i + 1] + text[i + 2] + text[i + 3]

        if (!levels[currentLevel]) levels[currentLevel] = []

        const currentLevelArray = levels[currentLevel]

        if (startMarkEncountered(nextFourChars)) {
            currentLevel++
            stack.push(nextFourChars)

            i += 4 - 1
        } else if (endMarkEncountered(nextFourChars)) {
            currentLevel--

            levels[currentLevel].push(
                nextFourChars === ESubTextMarkers.LINK_END_MARK ? (
                    <Link href={""}>
                        <a key={`text-element-${random20Id()}`}>
                            {levels[currentLevel + 1]}
                        </a>
                    </Link>
                ) : (
                    <span key={`text-element-${random20Id()}`}>
                        {levels[currentLevel + 1]}
                    </span>
                )
            )

            levels[currentLevel + 1] = []

            i += 4 - 1
        } else if (subElementEncountered(nextFourChars)) {
            currentLevelArray.push(<br />)

            i += 4 - 1
        } else {
            if (
                typeof currentLevelArray[currentLevelArray.length - 1] ===
                "string"
            )
                currentLevelArray[currentLevelArray.length - 1] += currentChar
            else {
                currentLevelArray.push(currentChar)
            }
        }
    }

    return levels[0]
}

const SpanifiedText = ({ text, spanColorClassName }: SpanifiedTextProps) => {
    let tempText = text
    const finalJSXElements: JSX.Element[] = []

    const spanify = () => {
        if (tempText.indexOf(ETextTagMarkers.SPAN_START_MARK) === -1) {
            finalJSXElements.push(
                <React.Fragment key={`text-element-${random20Id()}`}>
                    {splitBreaks(tempText)}
                </React.Fragment>
            )
            return
        }

        const preString = tempText.split(ETextTagMarkers.SPAN_START_MARK)[0],
            spanString = tempText.slice(
                tempText.indexOf(ETextTagMarkers.SPAN_START_MARK) +
                    ETextTagMarkers.SPAN_START_MARK.length,
                tempText.indexOf(ETextTagMarkers.SPAN_END_MARK)
            ),
            postString = tempText.slice(
                tempText.indexOf(ETextTagMarkers.SPAN_END_MARK) +
                    ETextTagMarkers.SPAN_END_MARK.length
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
