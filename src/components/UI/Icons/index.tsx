import gsap from "gsap"
import React, { useRef } from "react"
import { EIconSizes, IconProps } from "./interface"
import styles from "./Icons.module.scss"

export const Icon: React.FC<IconProps> = props => {
    const { size = EIconSizes.md } = props
    const iconBackground = useRef<HTMLDivElement>(null)

    enum EScaleDirection {
        SCALE_UP,
        SCALE_DOWN,
    }

    const scaleIcon = (scaleDirection: EScaleDirection) => {
        const isScaleUp = scaleDirection === EScaleDirection.SCALE_UP

        gsap.to(iconBackground.current, {
            scale: isScaleUp ? 3 : 0,
            duration: 0.2,
        })
    }

    return (
        <div
            style={{ width: size, height: size }}
            onMouseEnter={() => {
                scaleIcon(EScaleDirection.SCALE_UP)
            }}
            onMouseLeave={() => {
                scaleIcon(EScaleDirection.SCALE_DOWN)
            }}
            className={`${styles.container} relative cursor-pointer`}
        >
            <div
                ref={iconBackground}
                className={`
                    ${styles.iconBackground} 
                    absolute bg-yellow-200 w-full h-full rounded-full origin-center
                `}
            ></div>

            <svg
                className="absolute z-10"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                x="0"
                y="0"
                viewBox="0 0 100 100"
            >
                {props.children}
            </svg>
        </div>
    )
}
