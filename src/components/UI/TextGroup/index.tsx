import { ETextTypes } from "@lib/api/textGroups/interface"
import { ETextColorClassNames } from "@lib/themes/interface"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { random20Id } from "@utils/index"
import { useContext } from "react"

import { SpanifiedAndLinkifiedTextProps, TextGroupProps } from "./interface"
import SpanifyLinkifyText from "@components/UI/TextGroup/SpanifyLinkifyText"

const TextGroup = ({
    textBlocks,
    textAlign,
    textClassName,
    className,
}: TextGroupProps) => {
    const { state } = useContext(ThemeContext)

    return (
        <div className={className}>
            {textBlocks.map((item, i) => {
                const spanColorClassName =
                    state?.currentTheme === EThemes.LIGHT
                        ? ETextColorClassNames.LIGHT_THEME_TEXT_100
                        : ETextColorClassNames.DARK_THEME_TEXT_100

                const linkColorClassName =
                    state?.currentTheme === EThemes.LIGHT
                        ? ETextColorClassNames.LIGHT_THEME_TEXT_100
                        : ETextColorClassNames.DARK_THEME_TEXT_100

                const textColorClassName =
                    state?.currentTheme === EThemes.LIGHT
                        ? ETextColorClassNames.LIGHT_THEME_TEXT_200
                        : ETextColorClassNames.DARK_THEME_TEXT_200

                const SpanifiedAndLinkifiedText = ({
                    text,
                }: SpanifiedAndLinkifiedTextProps) => (
                    <SpanifyLinkifyText
                        linkClassName={linkColorClassName}
                        spanClassName={spanColorClassName}
                        text={text}
                    />
                )

                switch (item.type) {
                    case ETextTypes.H1:
                        return (
                            <h1
                                className={`${textColorClassName} ${textAlign} my-6 w-full ${textClassName}`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedAndLinkifiedText text={item.text} />
                                {/* &nbsp;&nbsp; */}
                            </h1>
                        )

                    case ETextTypes.H3:
                        return (
                            <h3
                                className={`${textColorClassName} ${textAlign} my-6 w-full ${textClassName}`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedAndLinkifiedText text={item.text} />
                            </h3>
                        )

                    case ETextTypes.P:
                        return (
                            <p
                                className={`${textColorClassName} ${textAlign} my-6 w-full ${textClassName}`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedAndLinkifiedText text={item.text} />
                            </p>
                        )

                    case ETextTypes.LI:
                        return (
                            <ul key={`textblock-${random20Id()}-${i}`}>
                                {item.text.split(";;;").map((line, j) => (
                                    <li
                                        key={`textblock-${random20Id()}-li-${j}`}
                                        className={`${textColorClassName} ${textAlign}  my-3 w-full ${textClassName}`}
                                    >
                                        <SpanifiedAndLinkifiedText
                                            text={"🔺 " + line}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )
                }
            })}
        </div>
    )
}

export default TextGroup
