import { ETextAlign, ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import { CurvedText } from "./svgs"
import TextBlock from "@ui/TextBlock"

const Section2 = () => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H1,
            text: "About",
        },

        {
            type: ETextTypes.P,
            text: "I currently live in :span:>Toronto, Canada 🍁 🇨🇦.<:span::br: I have over :span:>5 years<:span: of experience in designing and :span:>developing applications<:span: & helping start-ups ",
        },
    ]

    return (
        <div className="section-2-container h-screen relative ">
            <div className="flex-col-center w-full h-full">
                <div className="flex-row-center w-full h-full">
                    {/* TEXT */}
                    <div className="w-1/2 m-4">
                        <TextBlock
                            textAlign={ETextAlign.RIGHT}
                            textBlock={textBlock}
                        />
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
