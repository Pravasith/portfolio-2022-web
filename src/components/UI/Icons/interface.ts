import React from "react"

export enum EIconSizes {
    xs = "1.75rem",
    sm = "2.75rem",
    md = "3.5rem",
    lg = "5rem",
    xl = "6rem",
}

export interface IconProps {
    size?: EIconSizes
    children: React.ReactNode
}
