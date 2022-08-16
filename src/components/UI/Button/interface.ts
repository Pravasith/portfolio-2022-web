import { HTMLAttributeAnchorTarget } from "react"

export interface ButtonProps {
    text: string
    linkTo?: string
    type?: "button" | "reset" | "submit"
    className?: string
    disabled?: boolean
    showLoading?: boolean
    target?: HTMLAttributeAnchorTarget
}
