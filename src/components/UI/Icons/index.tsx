import React from "react"
import { EIconSizes, IconProps } from "./interface"

export const Icon: React.FC<IconProps> = props => {
    const { size = EIconSizes.md } = props

    return (
        <div className="relative">
            {/* <div className="absolute bg-yellow-200 w-14 h-14 rounded-full origin-center"></div> */}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                x="0"
                y="0"
                viewBox="0 0 100 100"
            >
                {props.children}
            </svg>
        </div>
    )
}
