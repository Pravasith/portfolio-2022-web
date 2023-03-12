import TextGroup from "@components/UI/TextGroup"
import { ETextTypes } from "@lib/api/textGroups/interface"
import { BlogProps } from "@components/Pages/Fun/interface"
import FunProjects from "@components/Pages/Fun/FunProjects"

const Blog = ({ mediaBlocks }: BlogProps) => {
    return (
        <div className="flex-col-center">
            <div className="w-full">
                <TextGroup
                    textBlocks={[
                        {
                            type: ETextTypes.H3,
                            text: "Sorry 🙏🏻, I am yet to add my tech-blogs.:br: But here are some non-tech blogs that I'm sure you'll love! 🤗",
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
