import { Spikes } from "@components/SVGs/HomeSection3"
import TextGroup from "@components/UI/TextGroup"
import { ETextTypes } from "@lib/api/textGroups/interface"

import ImageBlock from "@components/UI/ImageBlock"

const Section3New = () =>
    // { textBlocks, projects }: Section3Props
    {
        return (
            <div className="section-3-container flex-col-center">
                <div className="flex-col-center w-full mt-10 mb-44">
                    <div className="w-80">
                        <Spikes />
                    </div>
                </div>

                {/* TEXT BLOCK */}

                <div className="w-full bg-green-400">
                    <ImageBlock
                        imageBlock={{
                            src: "/img/meal-delivery-app.webp",
                        }}
                    />
                </div>

                {/* OTHER FUN PROJECTS */}
                <TextGroup
                    className={`
                    my-10 px-6
                    tablet:px-1/5
                    laptop:px-[25%]
                    desktop:px-[30%] desktop:mb-40
                    full-hd:px-[33.33%] full-hd:mb-20
                `}
                    textBlocks={[
                        {
                            text: ":ln>🔖 If you're a designer, checkout my other fun projects:ln:/fun<ln:",
                            type: ETextTypes.H3,
                        },
                    ]}
                />
            </div>
        )
    }

export default Section3New
