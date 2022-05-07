import { ETextAlign, ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import { CurvedText } from "./svgs"
import TextBlock from "@ui/TextBlock"
import Button from "@components/UI/Button"

const Section2 = () => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H1,
            text: "About.",
        },

        {
            type: ETextTypes.P,
            text: `I currently live in :span:>Toronto, Canada 🍁 🇨🇦.<:span:
            In my :span:>five years<:span: of professional experience, I've helped start-ups and 
            large organizations solve user problems with technology. 
            :br: :br:
            When I've time to spare, I like to design, build, and engineer beautiful products, physical and virtual.`,
        },
    ]

    return (
        <div className="section-2-container w-full h-screen my-96 ">
            <div className="flex-col-center w-full h-full ">
                <div className="flex-col-south w-full h-full ">
                    {/* TEXT */}
                    <div className="w-1/3 my-8 flex-col-west ">
                        <TextBlock
                            textAlign={ETextAlign.LEFT}
                            textBlock={textBlock}
                        />

                        <Button text={"Resume"} />
                    </div>

                    {/* SVG */}
                    <div className="section-2-curved-text w-1/3 mx-4 h-1/2 flex-col-south ">
                        <CurvedText />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
