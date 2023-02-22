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
                    text: "I make your brand stand-out by building a stunning website✨.",
                },
                // {
                //     type: ETextTypes.P,
                //     // text: "Hi 👋🏼 I’m Pravas, a :st>Full Stack TypeScript/JavaScript/Java<st: Developer currently in :st>Toronto, CA 🇨🇦<st:. I am passionate about building great products. I love working more on the backend 🚀 than on the frontend 🎨 (surprisingly). In my spare time, I design 3D models, design/develop nerdy things. These days, I’m having great fun solving :st>leetcode<st: problems.",
                //     text: `
                //         Hi,
                //     `
                // },
            ],
        },
        {
            name: "home-section-2",
            order: 2,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "Hi 👋, I'm Prav,:br:a freelance Designer, and a Developer",
                },
                // {
                //     type: ETextTypes.P,
                //     text: "In my :st>five years<st: of professional experience, I've helped :st>start-ups<st: solve user problems with technology. I started as a :st>designer<st: and loved building products, so much so that I desired the skills to build them myself. So I transitioned into :st>tech<st: and loved my job even more 😇. My :st>resume<st: mentions all the skills I’ve acquired until now, have a look!",
                // },
                {
                    type: ETextTypes.P,
                    text: `
                        Nice to meet you 😁, I have been a Creative Developer at highly funded start-ups 
                        and Award-winning Digital production studios for over 6 years, 
                        specializing in creating dynamic webpages with the latest and powerful frontend technologies. 

                    `
                }
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
                    text: "What excites me the most in tech is the thrill you feel after finding a solution to a problem, and the satisfaction you attain after you build something beautiful.:br::br:Like many other awesome developers out there, I often try to do side projects to learn new technologies. Since I’m lucky enough to possess the ability to design, I get to evolve the design of the product as I go 😁. Here are a few projects that I had loads of fun working on ✨.",
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
                {
                    type: ETextTypes.P,
                    text: "I’d appreciate it if you wrote to me, be it about my work/feedback or even just a hi! I am :st>currently looking for new Full-Stack opportunities<st: in :st>Canada<st:, and if you are hiring, let me know if I have a shot :)",
                },
            ],
        },
    ],
    projects: [
        {
            name: "all-projects",
            projects: [
                {
                    title: "Old portfolio website",
                    description:
                        "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
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
                        "A Spotify clone app with an unnecessarily complicated backend. I used Spotify endpoints to make an aggregated backend that serves data via :st>GraphQL<st:. I used :st>TypeScript, NodeJS, TypeGraphQL, Apollo, ExpressJS, HowlerJS, NextJS/ReactJS<st: and :st>Illustrator<st: for UX Design.",
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
                        "My first attempt at building a first-person 3D Open World game that runs on the browser. I used :st>NextJS/ReactJS, ThreeJS; Blender<st: for modelling, and :st>Illustrator<st: for UX Design.",
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
