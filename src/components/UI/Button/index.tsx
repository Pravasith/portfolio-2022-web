import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { useContext } from "react"
import { ButtonProps } from "./interface"

const Button = (props: ButtonProps) => {
    const { state } = useContext(ThemeContext)

    return (
        <>
            <button
                {...props}
                className={`
                    my-3
                    px-5 py-2
                    border-2 border-solid 
                    active:bg-button-bgd-1 bg-150%
                    hover:bg-button-bgd-2
                    ${
                        state?.currentTheme === EThemes.LIGHT
                            ? "border-black"
                            : "border-white"
                    }
                    ${props.className}
                `}
            >
                <p
                    className={`font-calibre-bold  ${
                        state?.currentTheme === EThemes.LIGHT
                            ? "text-black"
                            : "text-white"
                    }`}
                >
                    {props.text}
                </p>
            </button>
        </>
    )
}

export default Button
