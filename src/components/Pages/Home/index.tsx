import { TextBlocksType } from "@lib/api/textBlocks/interface"
import React from "react"
import { HomeProps } from "./interface"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

const Home = ({ homePageTextBlocks }: HomeProps) => {
    const textBlocks = homePageTextBlocks.reduce<
        Record<string, TextBlocksType>
    >((all, item) => {
        all[item.name] = item
        return all
    }, {})

    return (
        <div className={`flex flex-col justify-center w-full h-full`}>
            {/* INTENTIONAL COMMENT: Keep this div because you need it for ScrollTrigger */}
            <div className="w-full h-full">
                <Section1
                    textBlocks={textBlocks["home-section-1"].textBlocks}
                />
                <Section2
                    textBlocks={textBlocks["home-section-2"].textBlocks}
                />
                <Section3
                    textBlocks={textBlocks["home-section-3"].textBlocks}
                />
                <Section4
                    textBlocks={textBlocks["home-section-4"].textBlocks}
                />
            </div>
        </div>
    )
}

export default Home
