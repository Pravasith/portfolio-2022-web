import { EColors } from "@lib/themes/interface"

import React from "react"

export enum EIconSizes {
    xs = "1.75rem",
    sm = "2.75rem",
    md = "3.5rem",
    lg = "5rem",
    xl = "6rem",
}

export enum EScaleDirection {
    SCALE_UP,
    SCALE_DOWN,
}

export interface IconProps extends React.HTMLProps<HTMLDivElement> {
    iconSize?: EIconSizes
    hideHoverBackground?: boolean
    iconBackground?: EColors
}

export type TTimeline = gsap.core.Timeline | null
