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
                        Nice to meet you 😁, I have been a :st>Creative Developer<st: at highly funded start-ups 
                        and Award-winning Digital production studios for over 6 years, 
                        specializing in creating dynamic webpages with the latest and powerful frontend technologies. 
                        I started freelancing to use my passion and skills to make an impact on businesses like yours.
                        Ultimately, I thrive to represent your business in the best way possible so that your
                        business gets more reach online and increase your leads dramatically.
                    `,
                },
            ],
        },
        {
            name: "home-section-3",
            order: 3,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "What I Do 🍓",
                },
                {
                    type: ETextTypes.P,
                    text: `
                        I help your business 
                        stand out from the crowd and attract potential customers. 
                        My designs are tailored to your specific needs and crafted to make 
                        sure you are getting the most out of your website. 
                        My designs are optimized for the best performance and 
                        usability to ensure your users have a great experience. 

                        Here are some of my personal Projects -
                    `,
                },
            ],
        },
        {
            name: "home-section-4",
            order: 4,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "I'm Available For A Chat!",
                },
                {
                    type: ETextTypes.P,
                    // text: "I’d appreciate it if you wrote to me, be it about my work/feedback or even just a hi! I am :st>currently looking for new Full-Stack opportunities<st: in :st>Canada<st:, and if you are hiring, let me know if I have a shot :)",
                    text: `
                        Whether you're looking to boost your online presence, generate more leads, or increase sales, 
                        I can help you achieve your goals. My websites are designed with your target audience in mind, 
                        ensuring that every aspect of your site resonates with your customers and encourages them to take action.
                        So if you're ready to take your business to the next level, let's chat! 
                        Fill out the form below and tell me a little bit about yourself and your project. 
                        I can't wait to hear from you and start creating something amazing together!
                    `,
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
