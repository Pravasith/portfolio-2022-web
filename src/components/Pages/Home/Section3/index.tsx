import { Spikes } from "@components/SVGs/HomeSection3"
import TextBlock from "@components/UI/TextBlock"
import { ETextAlign } from "@components/UI/TextBlock/interface"
import { SectionProps } from "../interface"
import ProjectSection from "./ProjectSection"

const Section3 = ({ textBlocks }: SectionProps) => {
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
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={textBlocks}
                    />
                </div>
            </div>

            {/* PROJECT SECTION */}
            <div className="w-1/2 my-10">
                <ProjectSection />
            </div>
        </div>
    )
}

export default Section3
