import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { useContext } from "react"
import Loader from "@ui/Loader"
import { ButtonProps } from "./interface"
import Link from "next/link"

const Button = (props: ButtonProps) => {
    const { state } = useContext(ThemeContext)

    return (
        <>
            <button
                disabled={props.disabled}
                className={`
                    my-3
                    px-5 py-2
                    border-2 border-solid rounded-2xl
                    bg-opacity-30
                    active:bg-button-bgd-1 bg-150%
                    hover:bg-button-bgd-2
                    ${
                        props.disabled
                            ? "border-gray-400 text-gray-400 bg-none hover:bg-none active:bg-none cursor-not-allowed"
                            : state?.currentTheme === EThemes.LIGHT
                            ? "border-black text-black"
                            : "border-white text-white"
                    }
                    ${props.className}
                    
                `}
                type={props.type}
            >
                {props.showLoading ? (
                    <Loader />
                ) : !!props.linkTo ? (
                    <Link href={props.linkTo}>
                        <a target={props.target ?? "_self"}>
                            <p className={`font-calibre-bold`}>{props.text}</p>
                        </a>
                    </Link>
                ) : (
                    <p className={`font-calibre-bold`}>{props.text}</p>
                )}
            </button>
        </>
    )
}

export default Button
