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
            <div
                className={`
                    flex-col-west px-6 w-full
                    md:px-1/5
                    lg:px-[25%]
                    xl:px-[30%]
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
                <ProjectSection projects={projects} />
            </div>

            {/* OTHER FUN PROJECTS */}
            <TextGroup
                className={`
                    my-10 px-6
                    md:px-1/5
                    lg:px-[25%]
                    xl:px-[30%] xl:mb-40
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
