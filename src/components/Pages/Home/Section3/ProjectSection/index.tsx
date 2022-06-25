import TextBlock from "@components/UI/TextBlock"
import { ETextAlign, ETextTypes } from "@lib/api/textBlocks/interface"

import {
    SVGBackground1,
    SVGBackground2,
    SVGBackground3,
} from "@svgs/HomeSection3"

import { Icon } from "@components/UI/Icons"
import Link from "next/link"
import { GithubIcon, OpenLinkIcon } from "@components/SVGs/HomeSection2"
import { EIconSizes } from "@components/UI/Icons/interface"

import ImageBlock from "@components/UI/ImageBlock"

import { ProjectSectionProps } from "./interface"

const ProjectSection = ({ projects }: ProjectSectionProps) => {
    // const [projects] = useState<ProjectType[]>(() => [
    //     {
    //         title: "My old portfolio website",
    //         description:
    //             "Old portfolio built using :span:>NextJS, ThreeJS, Express, Firebase<:span:; hosted on a DigitalOcean droplet using :span:>Ngnix, and PM2.<:span:",
    //         gitHubLink: "https://github.com/Pravasith",
    //         liveLink: "https://pravasdesign.com",
    //         media: {
    //             src: "/img/pravasith-portfolio-website.png",
    //             alt: "pravasith-portfolio-thumbnail",
    //             type: ESrcType.IMAGE,
    //             id: "pravasith-portfolio-thumbnail",
    //             width: 1000,
    //             height: 574,
    //             caption: "Pravasith's old portfolio site",
    //         },
    //     },
    //     {
    //         title: "Spotifinder",
    //         description:
    //             "A Spotify clone app built using :span:>NextJS, Apollo, GraphQL<:span: on the frontend; :span:>Express, TypeGraphQL<:span: on the backend. Make sure to check the GitHub code for this!",
    //         gitHubLink: "https://github.com/stars/Pravasith/lists/spotifinder",
    //         liveLink: "https://spotifinder.vercel.app/",
    //         media: {
    //             src: "/img/spotifinder-graphql.png",
    //             alt: "spotifinder thumbimage",
    //             type: ESrcType.IMAGE,
    //             id: "spotifinder-thumbnail",
    //             width: 1000,
    //             height: 574,
    //             caption: "A very cool app with a very cool Backend",
    //         },
    //     },
    //     {
    //         title: "Into The Void",
    //         description:
    //             "A first person 3D game built using :span:>ThreeJS and NextJS<:span:. (in progress)",
    //         gitHubLink: "https://github.com/Pravasith/into-the-void",
    //         liveLink: "https://bootes-void.vercel.app/bootes-space-mine",
    //         media: {
    //             src: "/img/space-mine-game.png",
    //             alt: "spacemine thumbimage",
    //             type: ESrcType.IMAGE,
    //             id: "spacemine-thumbnail",
    //             width: 1000,
    //             height: 574,
    //             caption: "A 3D game - Into the Void",
    //         },
    //     },
    // ])

    const Projects = projects.projects.map((item, i) => {
        const projectTextBlocks = [
            {
                type: ETextTypes.H3,
                text: item.title,
            },
            {
                type: ETextTypes.P,
                text: item.description,
            },
        ]

        return (
            <div key={item.media.id} className="flex-row-west py-36 w-full">
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
                        className={`w-full border-8  overflow-clip  ${"bg-gray-200"}`}
                    >
                        <ImageBlock imageBlock={item.media} />
                    </div>
                </div>

                <div className="px-10 flex-col-west">
                    <div className="m-3">
                        <TextBlock
                            textAlign={ETextAlign.LEFT}
                            textBlock={projectTextBlocks}
                        />
                    </div>

                    <div className="flex flex-row my-2">
                        {item.liveLink && (
                            <Link href={item.liveLink}>
                                <a className="m-3" target={"_blank"}>
                                    <Icon iconSize={EIconSizes.xs}>
                                        <OpenLinkIcon />
                                    </Icon>
                                </a>
                            </Link>
                        )}

                        {item.gitHubLink && (
                            <Link href={item.gitHubLink}>
                                <a className="m-3" target={"_blank"}>
                                    <Icon iconSize={EIconSizes.xs}>
                                        <GithubIcon />
                                    </Icon>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        )
    })

    return <>{Projects}</>
}

export default ProjectSection
