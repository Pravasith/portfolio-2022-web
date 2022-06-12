import TextBlock from "@components/UI/TextBlock"
import { ETextAlign, ETextTypes } from "@components/UI/TextBlock/interface"
import Image from "next/image"
import { useContext, useState } from "react"
import {
    SVGBackground1,
    SVGBackground2,
    SVGBackground3,
} from "@svgs/HomeSection3"

import { Project } from "./interface"
import { Icon } from "@components/UI/Icons"
import Link from "next/link"
import { GithubIcon, OpenLinkIcon } from "@components/SVGs/HomeSection2"
import { EIconSizes } from "@components/UI/Icons/interface"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { ETextColorClassNames } from "@lib/themes/colors"

const ProjectSection = () => {
    const [imageBlock] = useState<Project[]>(() => [
        {
            imageSrc: "/img/pravasith-portfolio-website.png",
            imageAlt: "pravasdesign.com thumbimage",
            id: "pravasith-portfolio-thumbnail",
            width: 1000,
            height: 574,
            details: {
                title: "My old portfolio website",
                description:
                    "Old portfolio built using :span:>NextJS, ThreeJS, Express, Firebase<:span:; hosted on a DigitalOcean droplet using :span:>Ngnix, and PM2.<:span:",
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
                    "Spotify clone app. Built using :span:>NextJS, Apollo, GraphQL<:span: on the frontend; :span:>Express, TypeGraphQL<:span: on the backend.",
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
                    "3D first person 3D game using :span:>ThreeJS and NextJS<:span:. (in progress)",
                gitHubLink: "",
                liveLink: "https://bootes-void.vercel.app/bootes-space-mine",
            },
        },
    ])

    const { state } = useContext(ThemeContext)

    const projects = imageBlock.map((item, i) => {
        const projectTextBlocks = [
            {
                type: ETextTypes.H3,
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
                    <div
                        key={`svg-bgd-01`}
                        className={`absolute w-130% top-1/2 -left-1/5 -z-10`}
                    >
                        {i === 0 && <SVGBackground1 />}
                    </div>

                    <div
                        key={`svg-bgd-02`}
                        className={`absolute w-full top-1/5 -left-1/5 -z-10`}
                    >
                        {i === 2 && <SVGBackground2 />}
                    </div>

                    <div
                        key={`svg-bgd-03`}
                        className={`absolute w-1/2 -top-1/3 -left-1/4 -z-10`}
                    >
                        {i === 0 && <SVGBackground3 />}
                    </div>

                    <div
                        className={`w-full border-8  overflow-clip  ${
                            state?.currentTheme === EThemes.LIGHT
                                ? ETextColorClassNames.LIGHT_THEME_TEXT_200
                                : ETextColorClassNames.DARK_THEME_TEXT_200
                        }`}
                    >
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
                    <div className="m-3">
                        <TextBlock
                            textAlign={ETextAlign.LEFT}
                            textBlock={projectTextBlocks}
                        />
                    </div>

                    <div className="flex flex-row">
                        <Link href={item.details.liveLink}>
                            <a className="m-3" target={"_blank"}>
                                <Icon iconSize={EIconSizes.xs}>
                                    <OpenLinkIcon />
                                </Icon>
                            </a>
                        </Link>

                        <Link href={item.details.gitHubLink}>
                            <a className="m-3" target={"_blank"}>
                                <Icon iconSize={EIconSizes.xs}>
                                    <GithubIcon />
                                </Icon>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return <>{projects}</>
}

export default ProjectSection
