import { CurvedText } from "@svgs/HomeSection2"
import TextGroup from "@components/UI/TextGroup"
// import Button from "@components/UI/Button"
import { SectionProps } from "@components/Pages/Home/interface"
import { ETextAlign } from "@lib/api/textGroups/interface"
// import { RESUME_LINK } from "@lib/api/database"

const Section2 = ({ textBlocks }: SectionProps) => {
    return (
        <div
        // className="min-h-screen"
        >
            <div
                className={`
                section-2-container w-full
            `}
            >
                <div
                    className={`
                    justify-between flex flex-col w-full
                    tablet:h-full
                    desktop:justify-end 
                `}
                >
                    {/* TEXT */}
                    <div
                        className={`
                            flex-col-west px-6
                            tablet:px-1/5 tablet:mt-6
                            laptop:px-[25%] laptop:mt-0
                            desktop:px-[30%] desktop:mb-8
                            full-hd:px-[33.33%]
                        `}
                    >
                        <TextGroup
                            textAlign={ETextAlign.LEFT}
                            textBlocks={textBlocks}
                        />

                        {/* <Button
                            text={"Resume"}
                            linkTo={RESUME_LINK}
                            target={"_blank"}
                        /> */}
                    </div>

                    {/* SVG */}
                    <div
                        className={`
                        section-2-curved-text w-full flex-col-south
                        tablet:h-[55%] 

                        tablet:w-[60%] tablet:mx-1/5
                        laptop:w-[50%] laptop:mx-[25%]
                        desktop:w-[35%] desktop:mx-[32.5%]
                        full-hd:w-[25%] full-hd:mx-[37.5%]
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
