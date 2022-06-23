import { ETextTypes } from "@lib/api/textBlocks/interface"
import { ETextColorClassNames } from "@lib/themes/interface"
import { ThemeContext } from "@utils/contexts/themeContext"
import { EThemes } from "@utils/contexts/themeContext/interface"
import { random20Id } from "@utils/index"
import { useContext } from "react"

import { TextBlockProps } from "./interface"
import SpanifiedText from "./SpanifiedText"

const TextBlock = ({ textBlock, textAlign }: TextBlockProps) => {
    const { state } = useContext(ThemeContext)

    return (
        <article className="w-full">
            {textBlock.map((item, i) => {
                const spanColorClassName = item.spanColorClassName
                    ? item.spanColorClassName
                    : state?.currentTheme === EThemes.LIGHT
                    ? ETextColorClassNames.LIGHT_THEME_TEXT_100
                    : ETextColorClassNames.DARK_THEME_TEXT_100

                const textColorClassName = item.textColorClassName
                    ? item.textColorClassName
                    : state?.currentTheme === EThemes.LIGHT
                    ? ETextColorClassNames.LIGHT_THEME_TEXT_200
                    : ETextColorClassNames.DARK_THEME_TEXT_200

                switch (item.type) {
                    case ETextTypes.H1:
                        return (
                            <h1
                                className={`${spanColorClassName} ${textAlign} my-6 w-full`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedText
                                    spanColorClassName={spanColorClassName}
                                    text={item.text}
                                />
                                &nbsp;&nbsp;
                            </h1>
                        )

                    case ETextTypes.H3:
                        return (
                            <h3
                                className={`${textColorClassName} ${textAlign}  my-5 w-full`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedText
                                    spanColorClassName={spanColorClassName}
                                    text={item.text}
                                />
                            </h3>
                        )

                    case ETextTypes.P:
                        return (
                            <p
                                className={`${textColorClassName} ${textAlign}  my-3 w-full`}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedText
                                    spanColorClassName={spanColorClassName}
                                    text={item.text}
                                />
                            </p>
                        )
                }
            })}
        </article>
    )
}

export default TextBlock
