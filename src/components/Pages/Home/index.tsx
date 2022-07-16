import { TextBlockType } from "@lib/api/textGroups/interface"
import React, { useEffect } from "react"
import { HomeProps } from "./interface"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

const Home = ({ textSections, projects }: HomeProps) => {
    // const textBlocks = textSection.textBlocks.reduce<Record<string, TextGroupType>>(
    //     (all, item) => {
    //         all[item.name] = item
    //         return all
    //     },
    //     {}
    // )

    useEffect(() => {
        console.log(textSections)
    }, [])

    enum HomeSections {
        SECTION_1 = "home-section-1",
        SECTION_2 = "home-section-2",
        SECTION_3 = "home-section-3",
        SECTION_4 = "home-section-4",
    }

    const homeSections = new Map<HomeSections, TextBlockType[]>()

    homeSections.set(
        HomeSections.SECTION_1,
        textSections.find(section => section.name === "home-section-1")
            ?.textBlocks ?? []
    )
    homeSections.set(
        HomeSections.SECTION_2,
        textSections.find(section => section.name === "home-section-2")
            ?.textBlocks ?? []
    )
    homeSections.set(
        HomeSections.SECTION_3,
        textSections.find(section => section.name === "home-section-3")
            ?.textBlocks ?? []
    )
    homeSections.set(
        HomeSections.SECTION_4,
        textSections.find(section => section.name === "home-section-4")
            ?.textBlocks ?? []
    )

    return (
        <div className={`flex flex-col justify-center w-full h-full`}>
            {/* INTENTIONAL COMMENT: Keep this div because you need it for ScrollTrigger */}
            <div className="w-full h-full">
                <Section1
                    textBlocks={homeSections.get(HomeSections.SECTION_1) ?? []}
                />
                <Section2
                    textBlocks={homeSections.get(HomeSections.SECTION_2) ?? []}
                />
                <Section3
                    textBlocks={homeSections.get(HomeSections.SECTION_3) ?? []}
                    projects={projects}
                />
                <Section4
                    textBlocks={homeSections.get(HomeSections.SECTION_4) ?? []}
                />
            </div>
        </div>
    )
}

export default Home
