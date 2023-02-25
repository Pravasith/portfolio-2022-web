import { INDEX_PAGE_DATA } from "@lib/api/database"
import { TextBlockType } from "@lib/api/textGroups/interface"
import { useEffect } from "react"
import { registerHomePageAnimations } from "./animations"
import { HomeProps, HomeSections } from "./interface"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3New from "./Section3New"
import Section4 from "./Section4"

const Home = ({
    textSections,
}: // projects
HomeProps) => {
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

    useEffect(() => {
        registerHomePageAnimations()
    }, [])

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
                <Section3New
                    textBlocks={homeSections.get(HomeSections.SECTION_3) ?? []}
                    projects={INDEX_PAGE_DATA.projects}
                />
                <Section4
                    textBlocks={homeSections.get(HomeSections.SECTION_4) ?? []}
                />
            </div>
        </div>
    )
}

export default Home
