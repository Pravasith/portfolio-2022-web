import { ETextColorClassNames } from "@lib/themes/colors"

export interface SpanifiedTextProps {
    text: string
    spanColorClassName: ETextColorClassNames
}

export enum ETextSubElements {
    START_SPAN_EL_MARK = ":span:>",
    END_SPAN_EL_MARK = "<:span:",
    BREAK_EL_MARK = ":br:",
}
