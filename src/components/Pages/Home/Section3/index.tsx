// import { Spikes } from "@components/SVGs/HomeSection3"
import TextGroup from "@components/UI/TextGroup"
import { ETextAlign } from "@lib/api/textGroups/interface"

import { Section3Props } from "@components/Pages/Home/interface"
import ProjectSection from "./ProjectSection"
import { Blob2 } from "@components/SVGs/HomeSection2"

const Section3 = ({ textBlocks, projects }: Section3Props) => {
    // projects
    return (
        <div className="section-3-container flex-col-center">
            <div className="flex-col-center w-full mt-10 mb-44">
                <div className="h-0 relative w-full">
                <div className="absolute bottom-0 translate-y-1/3  left-1/2 -translate-x-1/2 -z-10">
                    <Blob2/>
                </div>
                </div>
            </div>

            {/* TEXT BLOCK */}
            <div
                className={`
                    flex-col-west px-6 w-full
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%]
                    full-hd:px-[33.33%]
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
            {/* <TextGroup
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
            /> */}
        </div>
    )
}

export default Section3
