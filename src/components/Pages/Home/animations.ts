import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const registerHomePageAnimations = () => {
    const tl1 = gsap.timeline()
    const tl2 = gsap.timeline()

    // Section 1 animations
    ScrollTrigger.create({
        animation: tl1,
        trigger: ".section-1-container",
        start: "top top",
        end: "bottom 25%",
        // markers: true,
        scrub: true,
    })

    tl1.to(".section-1-red-triangle", {
        y: 100,
        scale: 1.085,
        yoyo: true,
    })
        .to(
            ".section-1-bgd-beach-0",
            {
                y: 20,
                scale: 1.05,
                yoyo: true,
            },
            "<"
        )
        .to(
            ".section-1-bgd-beach-1",
            {
                y: -100,
                yoyo: true,
            },
            "<"
        )

    // Section 2 animations
    ScrollTrigger.create({
        animation: tl2,
        trigger: ".section-2-container",
        start: "25% 80%",
        end: "bottom 80%",
        // markers: true,
        scrub: true,
    })

    tl2.to(".curved-text-1", {
        attr: { startOffset: "50%" },
        yoyo: true,
        duration: 5,
    })

    // tl2.to(".section-1-red-triangle", {
    //     y: 100,
    //     scale: 1.085,
    //     yoyo: true,
    // })
    //     .to(
    //         ".section-1-bgd-beach-0",
    //         {
    //             y: 20,
    //             scale: 1.05,
    //             yoyo: true,
    //         },
    //         "<"
    //     )
    //     .to(
    //         ".section-1-bgd-beach-1",
    //         {
    //             y: -100,
    //             yoyo: true,
    //         },
    //         "<"
    //     )
}
