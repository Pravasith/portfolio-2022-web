import { Spikes } from "@components/SVGs/HomeSection3"
import TextGroup from "@components/UI/TextGroup"
import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

import { Section3Props } from "@components/Pages/Home/interface"
import ProjectSection from "./ProjectSection"

const Section3 = ({ textBlocks, projects }: Section3Props) => {
    return (
        <div className="section-3-container flex-col-center">
            <div className="flex-col-center w-full mt-10 mb-44">
                <div className="w-80">
                    <Spikes />
                </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="flex-col-center mx-1/4 px-5 w-full">
                <div className="section-3-text-block w-1/3">
                    <TextGroup
                        textAlign={ETextAlign.LEFT}
                        textBlocks={textBlocks}
                    />
                </div>
            </div>

            {/* PROJECT SECTION */}
            <div className="w-1/2 my-10">
                <ProjectSection projects={projects} />
            </div>

            {/* OTHER FUN PROJECTS */}
            <TextGroup
                className="my-10"
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
