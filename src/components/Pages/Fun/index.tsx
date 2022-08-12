import TextGroup from "@components/UI/TextGroup"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@lib/api/textGroups/interface"

import FunProjects from "@components/Pages/Fun/FunProjects"
import { FunProps } from "./interface"

const Fun = ({ mediaBlocks }: FunProps) => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H1,
            text: `My design projects 😁`,
        },
    ]

    // const [mediaBlocks] = useState<MediaBlockType[]>(() => [
    //     {
    //         src: "https://folio-pics.s3.eu-west-2.amazonaws.com/project-1-coverx.png",
    //         alt: "Meal Delivery App, a case study",
    //         type: ESrcType.IMAGE,
    //         id: "meal-delivery-app",
    //         width: 1000,
    //         height: 572,
    //         caption: "Meal Delivery App, a case study",
    //         showCaption: true,
    //         hyperlink: "/blogs/meal-delivery-app",
    //     },
    //     {
    //         src: "https://folio-pics.s3.eu-west-2.amazonaws.com/project-4-cover.jpg",
    //         alt: "Backpack Umbrella",
    //         type: ESrcType.IMAGE,
    //         id: "backpack-umbrella",
    //         width: 1000,
    //         height: 572,

    //         caption: "Backpack Umbrella",
    //         showCaption: true,
    //         hyperlink: "/blogs/backpack-umbrella",
    //     },
    //     {
    //         src: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project5/tyrex99X.mp4",
    //         alt: "3 Way Transformer",
    //         type: ESrcType.VIDEO,
    //         id: "transformer",
    //         width: 1000,
    //         height: 572,

    //         caption: "3-Way Transformer",
    //         showCaption: true,
    //         hyperlink: "/blogs/three-way-transformer",
    //     },
    //     {
    //         src: "https://folio-pics.s3.eu-west-2.amazonaws.com/project-3-cover.jpg",
    //         alt: "AR Helmet",
    //         type: ESrcType.IMAGE,
    //         id: "ar-helmet",
    //         width: 1000,
    //         height: 572,
    //         caption: "AR Helmet",
    //         showCaption: true,
    //         hyperlink: "/blogs/ar-helmet",
    //     },
    // ])

    return (
        <div className="flex-col-north w-full min-h-screen">
            <div className="w-full">
                <TextGroup
                    textAlign={ETextAlign.LEFT}
                    textBlocks={textBlock}
                    className={`
                        my-10 px-6
                        md:px-1/5
                        lg:px-[25%]
                    `}
                />
                <FunProjects mediaBlocks={mediaBlocks} />
            </div>
        </div>
    )
}

export default Fun
