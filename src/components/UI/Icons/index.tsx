import gsap from "gsap"
import React, { useContext, useRef } from "react"
import { EIconSizes, EScaleDirection, IconProps } from "./interface"
import styles from "./Icons.module.scss"

import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { EColors } from "@lib/themes/interface"

export const Icon: React.FC<IconProps> = props => {
    const {
        iconSize = EIconSizes.md,
        hideHoverBackground,
        iconBackground,
        ...rest
    } = props

    const iconBackgroundElement = useRef<HTMLDivElement>(null)

    const { state } = useContext(ThemeContext)

    const scaleIcon = (scaleDirection: EScaleDirection) => {
        const isScaleUp = scaleDirection === EScaleDirection.SCALE_UP

        gsap.to(iconBackgroundElement.current, {
            scale: isScaleUp ? 3 : 0,
            duration: 0.2,
        })
    }

    return (
        <div
            {...rest}
            style={{
                width: iconSize,
                height: iconSize,
            }}
            onMouseEnter={() => {
                scaleIcon(EScaleDirection.SCALE_UP)
            }}
            onMouseLeave={() => {
                scaleIcon(EScaleDirection.SCALE_DOWN)
            }}
            className={`${styles.container} relative cursor-pointer`}
        >
            <div
                ref={iconBackgroundElement}
                style={{
                    backgroundColor: iconBackground
                        ? iconBackground
                        : state?.currentTheme === EThemes.DARK
                        ? EColors.ICON_BACKGROUND_ORANGE_200
                        : EColors.ICON_BACKGROUND_YELLOW_100,
                }}
                className={`
                    ${styles.iconBackground} 
                    absolute w-full h-full rounded-full origin-center
                    ${hideHoverBackground && "hidden"}
                `}
            ></div>

            <svg
                className="absolute z-10"
                xmlns="http://www.w3.org/2000/svg"
                width={iconSize}
                height={iconSize}
                x="0"
                y="0"
                viewBox="0 0 100 100"
            >
                {props.children}
            </svg>
        </div>
    )
}
