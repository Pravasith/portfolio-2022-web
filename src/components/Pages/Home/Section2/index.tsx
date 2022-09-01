import { CurvedText } from "@svgs/HomeSection2"
import TextGroup from "@components/UI/TextGroup"
import Button from "@components/UI/Button"
import { SectionProps } from "@components/Pages/Home/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"
import { RESUME_LINK } from "@lib/api/database"

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

                        <Button
                            text={"Resume"}
                            linkTo={RESUME_LINK}
                            target={"_blank"}
                        />
                    </div>

                    {/* SVG */}
                    <div
                        className={`
                        section-2-curved-text w-full flex-col-south
                        md:h-[55%] 

                        mx-6
                        md:w-[60%] md:mx-1/5
                        lg:w-[50%] lg:mx-[25%]
                        xl:w-[35%] xl:mx-[32.5%]
                        2xl:w-[25%] 2xl:mx-[37.5%]
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
