import { CurvedText } from "@svgs/HomeSection2"
import TextGroup from "@components/UI/TextGroup"
import Button from "@components/UI/Button"
import { SectionProps } from "@components/Pages/Home/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"

const Section2 = ({ textBlocks }: SectionProps) => {
    return (
        <div className="min-h-screen">
            <div
                className={`
                section-2-container w-full
                md:h-screen
            `}
            >
                <div
                    className={`
                    justify-between flex flex-col w-full
                    md:h-full
                    xl:justify-end 
                `}
                >
                    {/* TEXT */}
                    <div
                        className={`
                            flex-col-west px-6
                            md:px-1/5 md:mt-6
                            lg:px-[25%] lg:mt-0
                            xl:px-[30%] xl:mb-8
                            2xl:px-[33.33%]
                        `}
                    >
                        <TextGroup
                            textAlign={ETextAlign.LEFT}
                            textBlocks={textBlocks}
                        />

                        <Button text={"Resume"} />
                    </div>

                    {/* SVG */}
                    <div
                        className={`
                        section-2-curved-text w-full flex-col-south
                        md:h-[55%] 
                    `}
                    >
                        <CurvedText />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
