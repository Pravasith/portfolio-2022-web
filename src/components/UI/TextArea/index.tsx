import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { ChangeEventHandler, useContext } from "react"

interface TextAreaProps {
    name: string
    placeholder: string
    rows?: number
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
    className?: string
    showError?: boolean
}

const TextArea = ({
    onChange,
    name,
    placeholder,
    rows,
    className,
    showError,
}: TextAreaProps) => {
    const { state } = useContext(ThemeContext)

    return (
        <textarea
            name={name}
            placeholder={placeholder}
            rows={rows ?? 1}
            className={`border-4 my-1 p-4 rounded-3xl  ${
                state?.currentTheme === EThemes.LIGHT
                    ? "border-black bg-white text-black"
                    : "border-white bg-black text-white"
            } ${showError && "border-red-500"} ${className}`}
            onChange={onChange}
        />
    )
}

export default TextArea
