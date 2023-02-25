import { Camera } from "@react-three/fiber"
import { TABLET_MAX_SCREEN_SIZE } from "@utils/constants"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const registerTableAnimations = (camera: Camera) => {
    const tl = gsap.timeline()

    const mm = gsap.matchMedia()

    mm.add(`(min-width: ${TABLET_MAX_SCREEN_SIZE}px)`, () => {
        ScrollTrigger.create({
            animation: tl,
            trigger: ".section-1-container",
            start: "top top",
            end: "bottom 25%",
            // markers: true,
            scrub: true,
        })

        tl.to(camera.position, {
            x: 2.56,
            y: 4.86,
            z: 5.86,
        })
    })
}
