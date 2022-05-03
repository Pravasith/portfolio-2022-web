import TextBlock from "@components/UI/TextBlock"
import { ETextAlign, ETextTypes } from "@components/UI/TextBlock/interface"
import Image from "next/image"
import { memo, useState } from "react"

const ProjectSection = () => {
    const [imageBlock] = useState<
        {
            imageSrc: string
            imageAlt: string
            id: string
            width: number
            height: number
            details: {
                title: string
                description: string
                gitHubLink: string
                liveLink: string
            }
        }[]
    >(() => [
        {
            imageSrc: "/img/pravasith-portfolio-website.png",
            imageAlt: "pravasdesign.com thumbimage",
            id: "pravasith-portfolio-thumbnail",
            width: 1000,
            height: 574,
            details: {
                title: "My old portfolio website",
                description:
                    "2 years ago, I built a portfolio using NextJS, ThreeJS, Express, Firebase and hosted it on DigitalOcean droplets using Ngnix, and PM2.",
                gitHubLink: "",
                liveLink: "https://pravasdesign.com",
            },
        },
        {
            imageSrc: "/img/spotifinder-graphql.png",
            imageAlt: "spotifinder thumbimage",
            id: "spotifinder-thumbnail",
            width: 1000,
            height: 574,
            details: {
                title: "Spotifinder",
                description:
                    "Spotify clone app (sort of), built using NextJS, Apollo, GraphQL on the frontend, Express, TypeGraphQL on the backend. Used Adobe Illustrator for the UI and icons.",
                gitHubLink: "",
                liveLink: "https://spotifinder.vercel.app/",
            },
        },
        {
            imageSrc: "/img/space-mine-game.png",
            imageAlt: "spacemine thumbimage",
            id: "spacemine-thumbnail",
            width: 1000,
            height: 574,
            details: {
                title: "3D Space Game",
                description:
                    "Built a 3D first person game using ThreeJS and NextJS. Hopefully I'll get more free time in the future to resume this project.",
                gitHubLink: "",
                liveLink: "https://bootes-void.vercel.app/bootes-space-mine",
            },
        },
    ])

    const projects = imageBlock.map(item => {
        const projectTextBlocks = [
            {
                type: ETextTypes.H1,
                text: item.details.title,
            },
            {
                type: ETextTypes.P,
                text: item.details.description,
            },
        ]

        return (
            <div key={item.id} className="flex-row-west w-full my-40">
                <div className="min-w-1/2 w-1/2 border-4 rounded-3xl flex-row-center border-black overflow-clip">
                    <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        width={item.width}
                        height={item.height}
                    />
                </div>

                <div className="mx-10">
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={projectTextBlocks}
                    />
                </div>
            </div>
        )
    })

    return <>{projects}</>
}

export default memo(ProjectSection)
