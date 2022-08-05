import TextGroup from "@components/UI/TextGroup"
import { ETextTypes } from "@lib/api/textGroups/interface"
import { FunProps } from "@components/Pages/Fun/interface"
import FunProjects from "@components/Pages/Fun/FunProjects"

const Blog = ({ mediaBlocks }: FunProps) => {
    return (
        <div className="flex-col-center">
            <div className="w-1/2">
                <TextGroup
                    textBlocks={[
                        {
                            type: ETextTypes.H3,
                            text: "Sorry 🙏🏻, I am yet to add my tech-blogs.:br: But here are some non-tech blogs that I'm sure you'll love! 🤗",
                        },
                    ]}
                    className="my-28"
                />
                <FunProjects mediaBlocks={mediaBlocks} />
            </div>
        </div>
    )
}

export default Blog
