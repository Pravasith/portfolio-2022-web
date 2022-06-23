import TextBlock from "@components/UI/TextBlock"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@lib/api/textBlocks/interface"

import { useState } from "react"

import { Spirals } from "@components/SVGs/FunPage"
import { ImageBlockType } from "@lib/api/imageBlocks/interface"
import ImageBlock from "@components/UI/ImageBlock"
import { ESrcType } from "@lib/api/mediaBlocks/interface"

const Fun = () => {
    const textBlock: TextBlockType[] = [
        {
            type: ETextTypes.H1,
            text: `Fun projects.`,
        },
        {
            type: ETextTypes.P,
            text: "Here's some :span:>non-tech<:span: stuff that I made for fun.",
        },
    ]

    const [mediaBlocks] = useState<ImageBlockType[]>(() => [
        {
            imageSrc:
                "https://folio-pics.s3.eu-west-2.amazonaws.com/project-1-coverx.png",
            imageAlt: "Meal Delivery App, a case study",
            type: ESrcType.IMAGE,
            id: "meal-delivery-app",
            width: 1000,
            height: 572,
            caption: "Meal Delivery App, a case study",
            showCaption: true,
            hyperlink: "/blogs/meal-delivery-app",
        },
        {
            imageSrc:
                "https://folio-pics.s3.eu-west-2.amazonaws.com/project-4-cover.jpg",
            imageAlt: "Backpack Umbrella",
            type: ESrcType.IMAGE,
            id: "backpack-umbrella",
            width: 1000,
            height: 572,

            caption: "Backpack Umbrella",
            showCaption: true,
            hyperlink: "/blogs/backpack-umbrella",
        },
        // {
        //     imageSrc:
        //         "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project5/tyrex99X.mp4",
        //     imageAlt: "3 Way Transformer",
        //     type: ESrcType.VIDEO,
        //     id: "transformer",
        //     width: 1000,
        //     height: 572,
        //     details: {
        //         title: "3-Way Transformer",
        //         liveLink: "/blogs/three-way-transformer",
        //     },
        // },
        {
            imageSrc:
                "https://folio-pics.s3.eu-west-2.amazonaws.com/project-3-cover.jpg",
            imageAlt: "AR Helmet",
            type: ESrcType.IMAGE,
            id: "ar-helmet",
            width: 1000,
            height: 572,
            caption: "AR Helmet",
            showCaption: true,
            hyperlink: "/blogs/ar-helmet",
        },
    ])

    return (
        <div className="section-4-container flex-col-center w-full h-screen bg0">
            <div className=" w-1/2">
                <TextBlock textAlign={ETextAlign.LEFT} textBlock={textBlock} />

                <div className="grid grid-cols-2 gap-2">
                    {mediaBlocks.map((item, i) => {
                        return (
                            <div
                                key={item.id + "-" + i}
                                className="w-full flex-col-west cursor-pointer"
                            >
                                <div className="w-full mb-1 relative">
                                    {item.type === ESrcType.IMAGE ? (
                                        <ImageBlock
                                            alignCaptionText={ETextAlign.LEFT}
                                            imageBlock={item}
                                        />
                                    ) : (
                                        <video
                                            autoPlay
                                            loop
                                            style={{
                                                width: item.width,
                                            }}
                                        >
                                            <source src={item.imageSrc} />
                                        </video>
                                    )}

                                    {i === 1 && (
                                        <div className="absolute w-72 h-72 -top-1/2 -right-1/4 -z-10">
                                            <Spirals />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Fun
