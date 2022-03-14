import TextBlock from "@ui/TextBlock"
import { ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import React from "react"

const Home = () => {
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
            </div>
        </div>
    )
}

export default Home
