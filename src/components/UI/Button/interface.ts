import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    text: string
    showLoading?: boolean
}
