import TextGroup from "@components/UI/TextGroup"
import { ETextTypes } from "@lib/api/textGroups/interface"
import { BlogProps } from "@components/Pages/Fun/interface"
import FunProjects from "@components/Pages/Fun/FunProjects"

const Blog = ({ mediaBlocks }: BlogProps) => {
    // console.log(mediaBlocks)
    return (
        <div className="flex-col-center">
            <div className="w-full pt-40">
                <TextGroup
                    textBlocks={[
                        {
                            type: ETextTypes.H3,
                            text: "Some of my fun DIY projects",
                        },
                    ]}

                    className={`
                        my-10 px-6
                        tablet:px-1/5
                        laptop:px-[25%]
                        desktop:px-[30%]
                        full-hd:px-[33.33%]
                    `}
                />
                <FunProjects mediaBlocks={mediaBlocks} />
            </div>
        </div>
    )
}

export default Blog
