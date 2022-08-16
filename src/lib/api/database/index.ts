import { ETextTypes } from "@lib/api/textGroups/interface"

import { ESrcType } from "@lib/api/mediaGroups/interface"
import { IndexPageData } from "./interface"

export const INDEX_PAGE_DATA: IndexPageData = {
    textSections: [
        {
            name: "home-section-1",
            order: 1,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "A Designer :br:turned :br:Software Engineer.",
                },
                {
                    type: ETextTypes.P,
                    text: "Hi 👋🏼 I’m Pravas, a :st>Full Stack TypeScript/JavaScript/Java<st: Developer currently in :st>Toronto, CA 🇨🇦<st:. I am passionate about building great products. I love working more on the backend 🚀 than on the frontend 🎨 (surprisingly). In my spare time, I design 3D models, design/develop nerdy things. These days, I’m having great fun solving :st>leetcode<st: problems.",
                },
            ],
        },
        {
            name: "home-section-2",
            order: 2,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "My short story",
                },
                {
                    type: ETextTypes.P,
                    text: "In my :st>five years<st: of professional experience, I've helped :st>start-ups<st: solve user problems with technology. I started as a :st>designer<st:, and absolutely loved building products, so much so that I desired the skills to build them myself. So I transitioned into :st>tech<st:, and loved it even more. My :st>resume<st: below shows all the skills I’ve acquired until now, please have a look. 😇",
                },
            ],
        },
        {
            name: "home-section-3",
            order: 3,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "Some tech projects 🍓",
                },
                {
                    type: ETextTypes.P,
                    text: "Some projects I did in the past ✨. Be sure to check out the live links!",
                },
            ],
        },
        {
            name: "home-section-4",
            order: 4,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "Write to me!",
                },
            ],
        },
    ],
    projects: [
        {
            name: "all-projects",
            projects: [
                {
                    title: "My old portfolio website",
                    description:
                        "Old portfolio built using :st>NextJS, ThreeJS, Express, Firebase<st:; hosted on a DigitalOcean droplet using :st>Ngnix, and PM2.<st:",
                    gitHubLink: "https://github.com/Pravasith",
                    liveLink: "https://pravasdesign.com",
                    media: {
                        src: "/img/pravasith-portfolio-website.png",
                        alt: "pravasith-portfolio-thumbnail",
                        type: ESrcType.IMAGE,
                        id: "pravasith-portfolio-thumbnail",
                        width: 1000,
                        height: 574,
                        caption: "Pravasith's old portfolio site",
                    },
                },
                {
                    title: "Spotifinder",
                    description:
                        "A Spotify clone app built using :st>NextJS, Apollo, GraphQL<st: on the frontend; :st>Express, TypeGraphQL<st: on the backend. Make sure to check the GitHub code for this!",
                    gitHubLink:
                        "https://github.com/stars/Pravasith/lists/spotifinder",
                    liveLink: "https://spotifinder.vercel.app/",
                    media: {
                        src: "/img/spotifinder-graphql.png",
                        alt: "spotifinder thumbimage",
                        type: ESrcType.IMAGE,
                        id: "spotifinder-thumbnail",
                        width: 1000,
                        height: 574,
                        caption: "A very cool app with a very cool Backend",
                    },
                },
                {
                    title: "Into The Void",
                    description:
                        "A first person 3D game built using :st>ThreeJS and NextJS<st:. (in progress)",
                    gitHubLink: "https://github.com/Pravasith/into-the-void",
                    liveLink:
                        "https://bootes-void.vercel.app/bootes-space-mine",
                    media: {
                        src: "/img/space-mine-game.png",
                        alt: "spacemine thumbimage",
                        type: ESrcType.IMAGE,
                        id: "spacemine-thumbnail",
                        width: 1000,
                        height: 574,
                        caption: "A 3D game - Into the Void",
                    },
                },
            ],
        },
    ],
}

export const RESUME_LINK =
    "https://drive.google.com/file/d/1x1nEsUpEDcLoAm3JUHJnCSUcffC5bGVY/view?usp=sharing"
