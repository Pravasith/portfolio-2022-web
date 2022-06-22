import { TextBlockType } from "@components/UI/TextBlock/interface"
import { TextBlocksType } from "@lib/api/textBlocks/interface"

export interface HomeProps {
    homePageTextBlocks: TextBlocksType[]
}

export interface SectionProps {
    textBlocks: TextBlockType[]
}
