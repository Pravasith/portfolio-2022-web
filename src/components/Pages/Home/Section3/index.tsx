import { Spikes } from "@components/SVGs/HomeSection3"
import TextGroup from "@components/UI/TextGroup"
import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

import { Section3Props } from "@components/Pages/Home/interface"
// import ProjectSection from "./ProjectSection"

const Section3 = ({ textBlocks }: Section3Props) => {
    // projects
    return (
        <div className="section-3-container flex-col-center">
            <div className="flex-col-center w-full mt-10 mb-44">
                <div className="w-80">
                    <Spikes />
                </div>
            </div>

            {/* TEXT BLOCK */}
            <div
                className={`
                    flex-col-west px-6 w-full
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%]
                `}
            >
                <div className="section-3-text-block">
                    <TextGroup
                        textAlign={ETextAlign.LEFT}
                        textBlocks={textBlocks}
                    />
                </div>
            </div>

            {/* PROJECT SECTION */}
            <div className="w-full my-10">
                {/* <ProjectSection projects={projects} /> */}
            </div>

            {/* OTHER FUN PROJECTS */}
            <TextGroup
                className={`
                    my-10 px-6
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%] desktop:mb-40
                    full-hd:px-[33.33%] full-hd:mb-20
                `}
                textBlocks={[
                    {
                        text: ":ln>🔖 If you're a designer, checkout my other fun projects:ln:/fun<ln:",
                        type: ETextTypes.H3,
                    },
                ]}
            />
        </div>
    )
}

export default Section3
