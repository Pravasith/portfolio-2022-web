import { ETextAlign, ETextTypes, TextBlockType } from "@ui/TextBlock/interface"

import { CurvedText } from "./svgs"
import TextBlock from "@ui/TextBlock"

const Section2 = () => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.P,
            text: "I’m currently living in :span:>Toronto, Canada.<:span:",
        },
        {
            type: ETextTypes.P,
            text: "I have over",
        },
        {
            type: ETextTypes.H1,
            text: "6 years",
        },
        {
            type: ETextTypes.P,
            text: "of experience in :span:>designing experiences<:span:, and :span:>developing web, mobile applications<:span: and :span:>turning business requirements into effective solutions<:span: at :span:>mid and high-valued startups<:span:.",
        },
    ]

    return (
        <div className="section-2-container h-screen relative">
            {/* SVG */}
            <div className="absolute w-1/2 top-1/4 right-0">
                <div className="flex-row-center w-full">
                    <div className="w-full relative">
                        <CurvedText />
                    </div>
                </div>
            </div>

            {/* TEXT */}
            <div className="section-2-text-block absolute top-1/2 left-0 w-96 ">
                <TextBlock textAlign={ETextAlign.RIGHT} textBlock={textBlock} />
            </div>
        </div>
    )
}

export default Section2
