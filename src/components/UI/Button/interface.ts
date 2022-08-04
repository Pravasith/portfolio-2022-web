export interface ButtonProps {
    type: "button" | "reset" | "submit"
    text: string
    className?: string
    disabled?: boolean
    showLoading?: boolean
}
