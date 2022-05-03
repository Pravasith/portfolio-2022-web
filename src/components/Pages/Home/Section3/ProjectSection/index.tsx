import TextBlock from "@components/UI/TextBlock"
import { ETextAlign, ETextTypes } from "@components/UI/TextBlock/interface"
import Image from "next/image"
import { useState } from "react"
import { SVGBackground1, SVGBackground2 } from "./svgs"

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

    const projects = imageBlock.map((item, i) => {
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
            <div key={item.id} className="flex-row-west py-36 w-full">
                <div className="relative min-w-1/2 w-1/2">
                    <div className={`absolute w-130% top-1/2 -left-1/5 -z-10`}>
                        {i === 0 && <SVGBackground1 />}
                    </div>

                    <div className={`absolute w-full top-1/5 -left-1/5 -z-10`}>
                        {i === 2 && <SVGBackground2 />}
                    </div>

                    <div className="w-full border-4 rounded-3xl border-black overflow-clip">
                        <div className={`flex-row-center`}>
                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                width={item.width}
                                height={item.height}
                            />
                        </div>
                    </div>
                </div>

                <div className="px-10">
                    <TextBlock
                        textAlign={ETextAlign.LEFT}
                        textBlock={projectTextBlocks}
                    />
                </div>
            </div>
        )
    })

    return <div>{projects}</div>
}

export default ProjectSection
