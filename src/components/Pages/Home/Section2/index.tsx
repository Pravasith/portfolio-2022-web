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
            text: `I currently live in :span:>Toronto, Canada 🍁 🇨🇦.<:span::br: 
            In my :span:>five years<:span: of professional experience, I've helped start-ups and 
            large organizations solve user problems with technology. 
            :br: :br:
            When I've time to spare, I like to design, build, and engineer beautiful products, physical and virtual.`,
        },
    ]

    return (
        <div className="section-2-container h-screen">
            <div className="flex-col-center w-full h-full">
                <div className="flex-row-center w-full h-full">
                    {/* TEXT */}
                    <div className="w-1/2 m-4 h-full flex-col-east">
                        <TextBlock
                            textAlign={ETextAlign.RIGHT}
                            textBlock={textBlock}
                        />

                        <Button text={"Resume"} />
                    </div>

                    {/* SVG */}
                    <div className="section-2-curved-text w-1/2 mx-4 h-full flex-col-south">
                        <CurvedText />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
