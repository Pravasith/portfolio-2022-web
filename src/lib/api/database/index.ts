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
                    text: "I ✍ write Software for the Web 📟",
                },
                {
                    type: ETextTypes.P,
                    text: `Hi 👋🏼 I'm Prav. I live in :st>Toronto, Canada<st:. I
                        spent the last :st>6 years<st: building :st>Big Corporate Web and 
                        Mobile Products<st:.
                        I also love making :st>cool side projects<st: and :st>internal tools<st: in my free time. 
                    `,

                },
            ],
        },
        {
            name: "home-section-2",
            order: 2,
            textBlocks: [
                {
                    type: ETextTypes.H1,
                    text: "Languages 🎭",
                },

                {
                    type: ETextTypes.P,
                    text: `
                        I worked with :st>TypeScript, JavaScript, and Java<st:
                        the most in my career. Recently, I started learning :st>C++<st:  
                        to build a multiplayer web game. I've also frequently used 
                        :st>Python<st: here and there to automate stuff.
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
                    text: "My Evolution 🌱",
                },
                {
                    type: ETextTypes.P,
                    text: `
                        I love making things. Ever since I was a child 
                        I was fond of making :ln>weird DIY stuff:ln:/fun/<ln:.  
                        I went to an Architecture school where I built 3D models,  
                        learnt how to code, and made :st>Web-Games with Flash<st:.
                        In my first job, I learnt how to make websites with
                        JavaScript, AngularJS, and NodeJS. Anyway, I went on to 
                        create super-complex apps on the web using all sorts of 
                        technologies for 6 years. 
                    `,
                },
                {
                    type: ETextTypes.P,
                    text: `
                       But I really enjoy working on personal projects. 
                       Here are :st>some of my personal projects -<st: 
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
                    text: "I'm looking for work!",
                },
                {
                    type: ETextTypes.P,
                    text: `
                        I am actually looking for new Full-Stack developer 
                        opportunities in Canada.
                        If you are hiring, please reach out to me on 
                        :ln>LinkedIn:ln:https://www.linkedin.com/in/pravasith/<ln:
                         or :ln>Twitter:ln:https://twitter.com/Pravasith<ln: just 
                         fill out the form below and I'll get back to you.
                    `,
                },
            ],
        },
    ],

    projects: [
        {
            title: "A Web-Game with my own Physics (W.I.P. 🚧)",
            description: `
               I'm currently working on a multiplayer 
               Web-Game with a procedurally generated world
               using :st>C++, TypeScript,
               ThreeJS, WebRTC.<st:. 
               Plan is to make it run superfast on the 
               browser by leveraging
               the power of modern web technologies.
                
            `,
            gitHubLink: "https://github.com/Pravasith/3d-web-game",
            liveLink: "https://particles-fun.vercel.app/",
            media: {
                // src: "/img/pravasith-portfolio-website.png",
                src: "https://res.cloudinary.com/pravasith/video/upload/v1696199843/Portfolio%202022/projects/space-game-prav.mp4",
                alt: "A dolphin like creature with guns on it's each side ",
                type: ESrcType.VIDEO,
                // id: "pravasith-portfolio-thumbnail",
                width: 1000,
                height: 574,
                // caption: "Pravasith's old portfolio site",
            },
        },
        {
            title: "Into the Void",
            description: `
                This is pandemic time project. I tried building a 3D game 
                while learning how to model in Blender and how to use ThreeJS.
                You can check the code out but Spaghetti-Code 🍝 warning has been issued.
            `,
            gitHubLink: "https://github.com/Pravasith/into-the-void",
            liveLink: "https://bootes-void.vercel.app/bootes-space-mine", 
          
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271507/Portfolio%202022/projects/bootes-void-game.mp4",
                type: ESrcType.IMAGE,
                width: 1000,
                height: 574,
                caption: "",
                alt: "spacemine thumbimage",
                id: "spacemine-thumbnail",
            },
        },
        {
            title: "Spotifinder",
            description: `
                I made this a long time ago - an App with a complicated backend. Made this one 
                while I was learning :st>GraphQL<st:. 
                I used Spotify endpoints to make an :st>aggregated backend<st: that serves data via GraphQL.
            `,
             gitHubLink: "https://github.com/stars/Pravasith/lists/spotifinder",
            liveLink: "https://spotifinder.vercel.app/",
            media: {
                src: "https://res.cloudinary.com/pravasith/video/upload/v1677271507/Portfolio%202022/projects/spotifinder.mp4",
                type: ESrcType.IMAGE,
                alt: "spotifinder thumbimage",
                id: "spotifinder-thumbnail",
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
