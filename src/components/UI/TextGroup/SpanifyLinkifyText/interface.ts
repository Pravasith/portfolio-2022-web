export interface SpanifyLinkifyTextProps {
    text: string
    spanClassName?: string
    linkClassName?: string
    strongClassName?: string
}

export enum TextMarkers {
    STRONG_START_MARK = ":st>",
    STRONG_END_MARK = "<st:",

    SPAN_START_MARK = ":sp>",
    SPAN_END_MARK = "<sp:",

    LINK_START_MARK = ":ln>",
    LINK_END_MARK = "<ln:",

    BREAK_EL_MARK = ":br:",
    LINK_EL_MARK = ":ln:",
}

export type TextLevels = Record<number, (JSX.Element | string)[]>
