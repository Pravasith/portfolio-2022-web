import { ETextAlign } from "@ui/TextBlock/interface"

import { CurvedText } from "@svgs/HomeSection2"
import TextBlock from "@ui/TextBlock"
import Button from "@components/UI/Button"
import { SectionProps } from "../interface"

const Section2 = ({ textBlocks }: SectionProps) => {
    return (
        <div className="section-2-container w-full h-screen mt-36">
            <div className="flex-col-south w-full h-full ">
                {/* TEXT */}
                <div className="w-1/3 my-8 flex-col-west ">
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={textBlocks}
                    />

                    <Button text={"Resume"} />
                </div>

                {/* SVG */}
                <div className="section-2-curved-text w-1/3 mx-4 h-1/2 flex-col-south ">
                    <CurvedText />
                </div>
            </div>
        </div>
    )
}

export default Section2
