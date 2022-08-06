export interface ButtonProps {
    text: string
    type?: "button" | "reset" | "submit"
    className?: string
    disabled?: boolean
    showLoading?: boolean
}
