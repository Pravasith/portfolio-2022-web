import useMobileScreen from "@hooks/useMobileScreen"
import useMouseScroll from "@hooks/useMouseScroll"
import gsap from "gsap"
import { useEffect } from "react"

export const Turbulence = (props: { noScrollAnimation?: boolean }) => {
    const isMobile = useMobileScreen()

    const animateWaveBackground = () => {
        const tl = gsap.timeline()

        tl.set("#turb", {
            attr: {
                baseFrequency: 0.008,
            },
        })
        tl.to("#turb", {
            attr: {
                baseFrequency: 0.001,
            },
            duration: 2,
            ease: "power4.out",
        })
    }

    const scrollY = useMouseScroll()

    useEffect(() => {
        animateWaveBackground()
    }, [])

    useEffect(() => {
        !props.noScrollAnimation && !isMobile && animateWaveBackground()
    }, [scrollY])

    return (
        <>
            <filter id="displacementFilter">
                <feTurbulence
                    id="turb"
                    type="turbulence"
                    baseFrequency={"0.01"}
                    numOctaves="8"
                    seed={1}
                    result="turbulence"
                />
                <feDisplacementMap
                    in2="turbulence"
                    in="SourceGraphic"
                    scale="50"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </>
    )
}
