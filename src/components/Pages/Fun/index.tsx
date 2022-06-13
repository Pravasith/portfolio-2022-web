import TextBlock from "@components/UI/TextBlock"
import {
    ETextAlign,
    ETextTypes,
    TextBlockType,
} from "@components/UI/TextBlock/interface"

import Image from "next/image"

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

    // const [imageBlock] = useState<Project[]>(() => [
    //     {
    //         imageSrc:
    //             "https://folio-pics.s3.eu-west-2.amazonaws.com/project-1-coverx.png",
    //         imageAlt: "Meal Delivery App, a case study",
    //         id: "Meal-Delivery-App",
    //         width: 1000,
    //         height: 572,
    //         details: {
    //             title: "Meal Delivery App, a case study",
    //             description:
    //                 "Old portfolio built using :span:>NextJS, ThreeJS, Express, Firebase<:span:; hosted on a DigitalOcean droplet using :span:>Ngnix, and PM2.<:span:",
    //             gitHubLink: "https://github.com/Pravasith",
    //             liveLink: "https://pravasdesign.com",
    //         },
    //     },
    //     {
    //         imageSrc: "/img/spotifinder-graphql.png",
    //         imageAlt: "spotifinder thumbimage",
    //         id: "spotifinder-thumbnail",
    //         width: 1000,
    //         height: 574,
    //         details: {
    //             title: "Spotifinder",
    //             description:
    //                 "Spotify clone app. Built using :span:>NextJS, Apollo, GraphQL<:span: on the frontend; :span:>Express, TypeGraphQL<:span: on the backend.",
    //             gitHubLink: "https://github.com/Pravasith",
    //             liveLink: "https://spotifinder.vercel.app/",
    //         },
    //     },
    //     {
    //         imageSrc: "/img/space-mine-game.png",
    //         imageAlt: "spacemine thumbimage",
    //         id: "spacemine-thumbnail",
    //         width: 1000,
    //         height: 574,
    //         details: {
    //             title: "3D Space Game",
    //             description:
    //                 "3D first person 3D game using :span:>ThreeJS and NextJS<:span:. (in progress)",
    //             gitHubLink: "https://github.com/Pravasith",
    //             liveLink: "https://bootes-void.vercel.app/bootes-space-mine",
    //         },
    //     },
    // ])

    return (
        <div className="section-4-container flex-col-center w-full h-screen bg0">
            <div className=" w-1/2">
                <TextBlock textAlign={ETextAlign.LEFT} textBlock={textBlock} />

                <div className="grid grid-cols-2 gap-2">
                    <div className="w-full">
                        <Image
                            src={
                                "https://folio-pics.s3.eu-west-2.amazonaws.com/project-1-coverx.png"
                            }
                            alt={""}
                            width={1000}
                            height={572}
                        />
                    </div>
                    <div className="bg-yellow-300 w-20 h-20"></div>
                    <div className="bg-pink-300 w-20 h-20"></div>
                    <div className="bg-yellow-300 w-20 h-20"></div>
                </div>
            </div>
        </div>
    )
}

export default Fun
