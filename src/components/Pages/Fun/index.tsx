import TextGroup from "@components/UI/TextGroup"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@lib/api/textGroups/interface"

import { Spirals } from "@components/SVGs/FunPage"

import ImageBlock from "@components/UI/ImageBlock"
import { ESrcType } from "@lib/api/mediaGroups/interface"
import VideoBlock from "@components/UI/VideoBlock"
import { FunProps } from "./interface"
import Link from "next/link"

const Fun = ({ mediaBlocks }: FunProps) => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H1,
            text: `Fun projects.`,
            order: 0,
        },
        {
            type: ETextTypes.P,
            text: "Here's some :ln>:sp>non-tech<sp::ln:/hello<ln: stuff that I made for fun.",
            order: 1,
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
        <div className="flex-col-center w-full h-screen">
            <div className="w-1/2">
                <TextGroup textAlign={ETextAlign.LEFT} textBlocks={textBlock} />

                <div className="grid grid-cols-2 gap-2">
                    {mediaBlocks.map((item, i) => {
                        return (
                            <Link
                                key={"media-block-fun-" + i}
                                href={item.hyperlink || "/not-found"}
                            >
                                <a
                                    target={"_blank"}
                                    key={item.id + "-" + i}
                                    className={`w-full flex-col-west ${
                                        item.hyperlink && "cursor-pointer"
                                    }`}
                                >
                                    <div className="w-full mb-1 relative">
                                        {item.type === ESrcType.IMAGE ? (
                                            <ImageBlock
                                                link={item.hyperlink}
                                                alignCaptionText={
                                                    ETextAlign.LEFT
                                                }
                                                imageBlock={item}
                                            />
                                        ) : (
                                            <VideoBlock
                                                link={item.hyperlink}
                                                alignCaptionText={
                                                    ETextAlign.LEFT
                                                }
                                                videoBlock={item}
                                            />
                                        )}

                                        {i === 1 && (
                                            <div className="absolute w-72 h-72 -top-1/2 -right-1/4 -z-10">
                                                <Spirals />
                                            </div>
                                        )}
                                    </div>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Fun
