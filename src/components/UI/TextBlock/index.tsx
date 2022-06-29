import { ETextTypes } from "@lib/api/textBlocks/interface"
import { ETextColorClassNames } from "@lib/themes/interface"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { random20Id } from "@utils/index"
import { useContext } from "react"

import { TextBlockProps } from "./interface"
import SpanifyLinkifyText from "@ui/TextBlock/SpanifyLinkifyText"

const TextBlock = ({ textBlock, textAlign, textClassName }: TextBlockProps) => {
    const { state } = useContext(ThemeContext)

    return (
        <article className="w-full">
            {textBlock.map((item, i) => {
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

                const SpanifiedAndLinkifiedText = (
                    <SpanifyLinkifyText
                        linkClassName={linkColorClassName}
                        spanClassName={spanColorClassName}
                        text={item.text}
                    />
                )

                switch (item.type) {
                    case ETextTypes.H1:
                        return (
                            <h1
                                className={`${textColorClassName} ${textAlign} my-6 w-full ${textClassName}`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                {SpanifiedAndLinkifiedText}
                                &nbsp;&nbsp;
                            </h1>
                        )

                    case ETextTypes.H3:
                        return (
                            <h3
                                className={`${textColorClassName} ${textAlign}  my-5 w-full ${textClassName}`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                {SpanifiedAndLinkifiedText}
                            </h3>
                        )

                    case ETextTypes.P:
                        return (
                            <p
                                className={`${textColorClassName} ${textAlign}  my-3 w-full ${textClassName}`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                {SpanifiedAndLinkifiedText}
                            </p>
                        )
                }
            })}
        </article>
    )
}

export default TextBlock
