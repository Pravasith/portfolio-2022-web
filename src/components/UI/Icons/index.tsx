import gsap from "gsap"
import React, { useRef } from "react"
import { EIconSizes, EScaleDirection, IconProps } from "./interface"
import styles from "./Icons.module.scss"
import { EColors } from "@assets/themes/colors"

export const Icon: React.FC<IconProps> = props => {
    const {
        iconSize = EIconSizes.md,
        hideHoverBackground,
        iconBackground,
        ...rest
    } = props

    const iconBackgroundElement = useRef<HTMLDivElement>(null)

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
            style={{ width: iconSize, height: iconSize }}
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
                className={`
                    ${styles.iconBackground} 
                    absolute w-full h-full rounded-full origin-center
                    ${hideHoverBackground && "hidden"}
                    ${
                        iconBackground
                            ? iconBackground
                            : EColors.ICON_BACKGROUND_YELLOW
                    }
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
