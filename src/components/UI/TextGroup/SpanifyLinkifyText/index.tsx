import { random20Id } from "@utils/index"
import Link from "next/link"
import React from "react"
import { TextMarkers, SpanifyLinkifyTextProps, TextLevels } from "./interface"

const startMarkEncountered = (nextFourChars: string) => {
    return (
        nextFourChars === TextMarkers.SPAN_START_MARK ||
        nextFourChars === TextMarkers.STRONG_START_MARK ||
        nextFourChars === TextMarkers.LINK_START_MARK
    )
}

const endMarkEncountered = (nextFourChars: string) => {
    return (
        nextFourChars === TextMarkers.SPAN_END_MARK ||
        nextFourChars === TextMarkers.STRONG_END_MARK ||
        nextFourChars === TextMarkers.LINK_END_MARK
    )
}

const subElementEncountered = (nextFourChars: string) => {
    return (
        nextFourChars === TextMarkers.BREAK_EL_MARK ||
        nextFourChars === TextMarkers.LINK_EL_MARK
    )
}

const SpanifyLinkifyText = ({
    text,
    spanClassName,
    linkClassName,
}: SpanifyLinkifyTextProps) => {
    const levels: TextLevels = {}

    let currentLevel = 0

    const getTag = (
        nextFourChars: string,
        arrayOfElements: (string | JSX.Element)[]
    ) => {
        if (nextFourChars === TextMarkers.LINK_END_MARK) {
            return (
                <Link
                    href={
                        (arrayOfElements.pop() as string) ||
                        "/404-oops-not-found"
                    }
                    key={`text-element-${random20Id()}`}
                >
                    <a
                        className={`${linkClassName} 
                            after:bg-yellow-300 after:absolute after:w-full 
                            after:h-half after after:left-0 after:-bottom-half after:-z-10 
                        relative`}
                    >
                        {arrayOfElements}
                    </a>
                </Link>
            )
        } else if (nextFourChars === TextMarkers.STRONG_END_MARK) {
            return (
                <strong key={`text-element-${random20Id()}`}>
                    {arrayOfElements}
                </strong>
            )
        } else if (nextFourChars === TextMarkers.SPAN_END_MARK) {
            return (
                <span
                    className={`${spanClassName}`}
                    key={`text-element-${random20Id()}`}
                >
                    {arrayOfElements}
                </span>
            )
        } else return <></>
    }

    // Since there are only 2 kinds of tags, there's no need to use
    // a tree based-approach for this.

    // So I'm using a hash-map based approach.

    // 1. Initially: If it's plain text, or BR tag, just add as is to master (or level 0) array
    // 2. If encountered a Start tag, then add upcoming stuff to level 1 array with appropriate tags
    // 3. a. If closing tag is encountered, add upcoming stuff to the upper level array
    //    b. Else if another opening tag is encountered, add upcoming stuff to the lower level array.
    // 4. If stop tag is encountered in the lowest level array, empty it and push all stuff to upper array.

    // Time complexity: O(n)

    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i]
        const nextFourChars = text[i] + text[i + 1] + text[i + 2] + text[i + 3]

        if (!levels[currentLevel]) levels[currentLevel] = []

        const currentLevelArray = levels[currentLevel]

        if (startMarkEncountered(nextFourChars)) {
            currentLevel++

            i += 4 - 1
        } else if (endMarkEncountered(nextFourChars)) {
            currentLevel--

            const upperLevelArray = levels[currentLevel + 1]
            levels[currentLevel].push(getTag(nextFourChars, upperLevelArray))
            levels[currentLevel + 1] = []

            i += 4 - 1
        } else if (subElementEncountered(nextFourChars)) {
            const key = `text-element-${random20Id()}`

            if (nextFourChars === TextMarkers.LINK_EL_MARK) {
                currentLevelArray.push("")
            } else currentLevelArray.push(<br key={key} />)

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

    return <>{levels[0]}</>
}

export default SpanifyLinkifyText
