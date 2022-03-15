import { ETextColorClassNames } from "@lib/themes/colors"
import { random20Id } from "@utils/index"

import { ETextTypes, TextBlockProps } from "./interface"
import SpanifiedText from "./SpanifiedText"

const TextBlock = ({ textBlock, colorClassName }: TextBlockProps) => {
    const textColorClassName = colorClassName
        ? colorClassName
        : ETextColorClassNames.LIGHT_THEME_TEXT_100

    return (
        <article>
            {textBlock.map((item, i) => {
                switch (item.type) {
                    case ETextTypes.H1:
                        return (
                            <h1
                                className={textColorClassName}
                                key={`textblock-${random20Id()}-${i}`}
                            >
                                <SpanifiedText
                                    textColorClassName={textColorClassName}
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
                                    textColorClassName={textColorClassName}
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
                                    textColorClassName={textColorClassName}
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
