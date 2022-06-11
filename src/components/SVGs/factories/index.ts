import { gsap } from "gsap"
import { getColors } from "@lib/themes/colors"
import { EThemes } from "@utils/contexts/themeContext/interface"

export const toggleTheme = (
    parentSvgElement: SVGGElement,
    currentTheme: EThemes
) => {
    const qIconPath = gsap.utils.selector(parentSvgElement)

    const colors = getColors(
        currentTheme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK
    )

    if (qIconPath("path").length)
        gsap.to(qIconPath("path"), {
            fill: colors,
        })

    if (qIconPath("text").length)
        gsap.to(qIconPath("text"), {
            fill: colors,
        })
}
