import { ETextColorClassNames } from "@lib/themes/interface"

export interface SpanifiedTextProps {
    text: string
    spanColorClassName: ETextColorClassNames
}

export enum ETextTagMarkers {
    SPAN_START_MARK = ":span:>",
    SPAN_END_MARK = "<:span:",

    LINK_START_MARK = ":link:>",
    LINK_END_MARK = "<:link:",

    BREAK_EL_MARK = ":br:",
}

export enum ESubTextMarkers {
    SPAN_START_MARK = ":sp>",
    SPAN_END_MARK = "<sp:",

    LINK_START_MARK = ":ln>",
    LINK_END_MARK = "<ln:",

    BREAK_EL_MARK = ":br:",
}
