import { CurvedText } from "@svgs/HomeSection2"
import TextGroup from "@components/UI/TextGroup"
import Button from "@components/UI/Button"
import { SectionProps } from "@components/Pages/Home/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"

const Section2 = ({ textBlocks }: SectionProps) => {
    return (
        <div className="section-2-container w-full h-screen mt-36">
            <div className="flex-col-south w-full h-full ">
                {/* TEXT */}
                <div className="my-8 flex-col-west px-6">
                    <TextGroup
                        textAlign={ETextAlign.LEFT}
                        textBlocks={textBlocks}
                    />

                    <Button text={"Resume"} />
                </div>

                {/* SVG */}
                <div className="section-2-curved-text w-full mx-4 flex-col-south ">
                    <CurvedText />
                </div>
            </div>
        </div>
    )
}

export default Section2
