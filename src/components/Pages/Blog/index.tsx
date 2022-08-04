import TextGroup from "@components/UI/TextGroup"
import { ETextTypes } from "@lib/api/textGroups/interface"

const Blog = () => {
    return (
        <div className="flex-col-center">
            <div className="w-1/3">
                <TextGroup
                    textBlocks={[
                        {
                            type: ETextTypes.H3,
                            text: "Sorry 🙏🏻, I am yet to add my tech-blogs. :br:But don't be disappointed! Here are some non-tech blogs that I'm sure you'll love! 🤗",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default Blog
