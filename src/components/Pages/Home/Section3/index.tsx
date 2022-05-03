import TextBlock from "@components/UI/TextBlock"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@components/UI/TextBlock/interface"
import ProjectSection from "./ProjectSection"

const textBlock: TextBlockType[] = [
    {
        type: ETextTypes.H1,
        text: `Spare time projects. 🍓`,
    },
    {
        type: ETextTypes.P,
        text: "In my spare time, I like to learn new technologies ✨. Here are some projects I made along the way. Enjoy!",
    },
]

const Section3 = () => {
    return (
        <div className="section-3-container flex-col-center">
            {/* TEXT BLOCK */}
            <div className="flex-col-center mx-1/4 px-5 h-1/2">
                <div className="section-3-text-block ">
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={textBlock}
                    />
                </div>
            </div>

            {/* PROJECT SECTION */}
            <div className="w-2/3 my-24">
                <ProjectSection />
            </div>
        </div>
    )
}

export default Section3
