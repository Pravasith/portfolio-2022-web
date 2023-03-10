import { ETextTypes } from "@lib/api/textGroups/interface"

import { ESrcType } from "@lib/api/mediaGroups/interface"
import { IndexPageData } from "./interface"

export const INDEX_PAGE_DATA_FREELANCE: IndexPageData = {
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
            title: "Old portfolio website",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271507/Portfolio%202022/projects/portfolio-pravasith.mp4",
                alt: "pravasith portfolio screen recording",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thumbnail",
                width: 1270,
                height: 720,
                caption: "Pravasith's old portfolio site",
            },
        },
        {
            title: "Meal Delivery App UX Case Study",
            description:
                "A Spotify clone app with an unnecessarily complicated backend. I used Spotify endpoints to make an aggregated backend that serves data via :st>GraphQL<st:. I used :st>TypeScript, NodeJS, TypeGraphQL, Apollo, ExpressJS, HowlerJS, NextJS/ReactJS<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/stars/Pravasith/lists/spotifinder",
            liveLink: "https://spotifinder.vercel.app/",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271503/Portfolio%202022/projects/meal-delivery-app.webp",
                alt: "Meal Delivery App thumbnail",
                type: ESrcType.IMAGE,
                id: "meal-delivery-app-thumbnail",
                width: 1024,
                height: 640,
                caption: "Meal Delivery App UX Case Study",
            },
        },
        {
            title: "Spotifinder App",
            description:
                "A Spotify clone app with an unnecessarily complicated backend. I used Spotify endpoints to make an aggregated backend that serves data via :st>GraphQL<st:. I used :st>TypeScript, NodeJS, TypeGraphQL, Apollo, ExpressJS, HowlerJS, NextJS/ReactJS<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/stars/Pravasith/lists/spotifinder",
            liveLink: "https://spotifinder.vercel.app/",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271507/Portfolio%202022/projects/spotifinder.mp4",
                alt: "Spotifinder App thumbnail",
                type: ESrcType.VIDEO,
                // id: "spotifinder-thumbnail",
                width: 1270,
                height: 720,
                caption: "Spotifinder App",
            },
        },
        {
            title: "Bootes Void Space Game",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271507/Portfolio%202022/projects/bootes-void-game.mp4",
                alt: "Bootes Void Game Render",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thmbnail",
                width: 1126,
                height: 650,
                caption: "Bootes Void Space Game",
            },
        },
        {
            title: "Have Some Chicken",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271505/Portfolio%202022/projects/have-some-chicken.mp4",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thmbnail",
                width: 1600,
                height: 1200,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Architecture Sketch",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271503/Portfolio%202022/projects/architecture-sketch.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 1024,
                height: 689,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Toddlers Table",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271504/Portfolio%202022/projects/toddlers-table.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 1163,
                height: 825,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Glasmet Game Asset",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271504/Portfolio%202022/projects/glasmet.mp4",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thmbnail",
                width: 1920,
                height: 1080,
                caption: "Have Some Chicken",
            },
        },

        {
            title: "Gift Box",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271504/Portfolio%202022/projects/gift-box.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 1024,
                height: 726,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Brochure Design",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271504/Portfolio%202022/projects/rolling-logs-brochure.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 1024,
                height: 589,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Preloader Design",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271504/Portfolio%202022/projects/preloader.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 752,
                height: 500,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Landing Page Design",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271504/Portfolio%202022/projects/rolling-logs.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 1024,
                height: 589,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Pedal Wash",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271503/Portfolio%202022/projects/pedal-wash.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 1024,
                height: 726,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Profile Page Design",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271503/Portfolio%202022/projects/archibuddy-profile.mp4",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thmbnail",
                width: 1040,
                height: 650,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Landing Page Design",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271503/Portfolio%202022/projects/archibuddy-home.mp4",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thmbnail",
                width: 1126,
                height: 650,
                caption: "Have Some Chicken",
            },
        },
        {
            title: "Funky Table Design",
            description:
                "I built a personal website 2 years ago, and the technologies I used are, :st>NextJS/ReactJS, ThreeJS NodeJS, ExpressJS, Firebase Firestore, AWS S3, DigitalOcean Droplets, Nginx, PM2,<st: and :st>Illustrator<st: for UX Design.",
            gitHubLink: "https://github.com/Pravasith",
            liveLink: "https://pravasdesign.com",
            media: {
                src: "https://res.cloudinary.com/pravasith/image/upload/v1677271503/Portfolio%202022/projects/funky-table.webp",
                alt: "Video render of 2 fried chicken legs on a plate",
                type: ESrcType.IMAGE,
                // id: "pravasith-portfolio-thmbnail",
                width: 600,
                height: 600,
                caption: "Have Some Chicken",
            },
        },
    ],
}

export const INDEX_PAGE_DATA_DEV: IndexPageData = {
    textSections: [
        {
            name: "home-section-1",
            order: 1,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "A Designer turned Developer",
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
                    text: "About me",
                },
                {
                    type: ETextTypes.P,
                    text: "In my :st>five years<st: of professional experience, I've helped :st>start-ups<st: solve user problems with technology. I started as a :st>designer<st: and loved building products, so much so that I desired the skills to build them myself. So I transitioned into :st>tech<st: and loved my job even more 😇. My :st>resume<st: mentions all the skills I’ve acquired until now, have a look!",
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
            gitHubLink: "https://github.com/stars/Pravasith/lists/spotifinder",
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
            liveLink: "https://bootes-void.vercel.app/bootes-space-mine",
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
}

const projects = []

for (let i = 0; i < INDEX_PAGE_DATA_FREELANCE.projects.length; i++) {
    if (i % 2 === 0) projects.push(INDEX_PAGE_DATA_FREELANCE.projects[i])
}

for (let i = 0; i < INDEX_PAGE_DATA_FREELANCE.projects.length; i++) {
    if (i % 2 !== 0) projects.push(INDEX_PAGE_DATA_FREELANCE.projects[i])
}

INDEX_PAGE_DATA_FREELANCE.projects = projects

export const RESUME_LINK =
    "https://drive.google.com/file/d/1x1nEsUpEDcLoAm3JUHJnCSUcffC5bGVY/view?usp=sharing"
