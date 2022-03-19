import { ETextColorClassNames } from "@lib/themes/colors"
import { random20Id } from "@utils/index"

import { ETextTypes, TextBlockProps } from "./interface"
import SpanifiedText from "./SpanifiedText"

const TextBlock = ({ textBlock }: TextBlockProps) => {
    return (
        <article>
            {textBlock.map((item, i) => {
                const spanColorClassName = item.spanColorClassName
                    ? item.spanColorClassName
                    : ETextColorClassNames.LIGHT_THEME_TEXT_100

                const textColorClassName = item.textColorClassName
                    ? item.textColorClassName
                    : ETextColorClassNames.LIGHT_THEME_TEXT_100

                switch (item.type) {
                    case ETextTypes.H1:
                        return (
                            <h1
                                className={textColorClassName}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedText
                                    spanColorClassName={spanColorClassName}
                                    text={item.text}
                                />
                            </h1>
                        )

                    case ETextTypes.H3:
                        return (
                            <h3
                                className={textColorClassName}
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
                                className={textColorClassName}
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
