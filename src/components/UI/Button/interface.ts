import { HTMLAttributeAnchorTarget, MouseEventHandler } from "react"

export interface ButtonProps {
    text: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    linkTo?: string
    type?: "button" | "reset" | "submit"
    className?: string
    disabled?: boolean
    showLoading?: boolean
    target?: HTMLAttributeAnchorTarget
}
