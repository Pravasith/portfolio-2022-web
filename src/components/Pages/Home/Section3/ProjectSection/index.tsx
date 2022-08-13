import TextGroup from "@components/UI/TextGroup"
import { ETextAlign, ETextTypes } from "@lib/api/textGroups/interface"

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
import { random20Id } from "@utils/index"
import { useContext } from "react"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"

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

    const { state } = useContext(ThemeContext)

    const themeBackground =
        (state?.currentTheme === EThemes.LIGHT ? "bg-white" : "bg-gray-800") +
        " xl:bg-transparent"

    const Projects = projects.projects.map((item, i) => {
        const projectTextBlocks = [
            {
                type: ETextTypes.H3,
                text: item.title,
                order: 0,
            },
            {
                type: ETextTypes.P,
                text: item.description,
                order: 1,
            },
        ]

        return (
            <div
                id={`home-section-3-project-${i + 1}`}
                key={random20Id()}
                className={`
                    flex-col-west py-10 w-full
                    xl:flex-row-center xl:px-1/5 xl:py-0 xl:pb-40
                    2xl:px-[25%] 2xl:pb-20
                    3xl:pb-36
                `}
            >
                <div
                    className={`
                        relative min-w-1/2 w-full overflow-x-clip
                        xl:min-w-[52%] xl:w-[52%]
                        xl:overflow-visible
                    `}
                >
                    {i === 0 && (
                        <div
                            key={`svg-bgd-01`}
                            className={`
                                absolute w-130% top-1/2 -left-1/5 -z-10
                                md:w-[85%] md:left-[7.5%] md:top-[90%]
                                xl:w-[150%] xl:-left-[30%] xl:top-[30%]
                                2xl:w-[120%] 2xl:-left-[15%]
                            `}
                        >
                            {<SVGBackground1 />}
                        </div>
                    )}

                    {i === 2 && (
                        <div
                            key={`svg-bgd-02`}
                            className={`
                                absolute w-full top-1/5 -left-1/5 -z-10
                                md:w-2/3 md:-top-auto md:-bottom-[140%] md:left-1/4 md:rotate-180
                                xl:w-[75%] xl:-bottom-[30%] xl:left-[35%]
                                2xl:-bottom-[40%]
                            `}
                        >
                            {<SVGBackground2 />}
                        </div>
                    )}

                    {i === 0 && (
                        <div
                            key={`svg-bgd-03`}
                            className={`
                                absolute w-1/2 -top-1/3 -left-1/4 -z-10
                                md:w-1/3 md:top-0 md:-left-[5%]
                                xl:-top-[40%] xl:-left-[20%] xl:w-1/2
                                2xl:w-[40%] 2xl:-top-[25%]
                            `}
                        >
                            {<SVGBackground3 />}
                        </div>
                    )}

                    <div
                        className={`
                            overflow-clip ${themeBackground} mx-6 rounded-t-[3rem]
                            md:mx-1/5
                            lg:mx-[25%]
                            xl:mx-0 xl:rounded-[3rem]
                        `}
                    >
                        <ImageBlock imageBlock={item.media} />
                    </div>
                </div>

                <div
                    className={`
                        flex-col-west mx-6 px-6 rounded-b-[3rem]
                        ${themeBackground}
                        md:mx-1/5
                        lg:mx-[25%]
                        xl:mx-0 xl:px-0 xl:ml-10
                    `}
                >
                    <div
                        className={`
                            my-2 w-full px-3
                            xl:pr-0 xl:mt-10
                        `}
                    >
                        <TextGroup
                            textAlign={ETextAlign.LEFT}
                            textBlocks={projectTextBlocks}
                        />
                    </div>

                    <div className="flex flex-row mb-10">
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
