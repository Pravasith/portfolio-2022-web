import { ProjectsType } from "@lib/api/projects/interface"
import { TextBlocksType, TextBlockType } from "@lib/api/textBlocks/interface"

export interface HomeProps {
    homePageTextBlocks: TextBlocksType[]
    projects: ProjectsType
}

export interface SectionProps {
    textBlocks: TextBlockType[]
}

export interface Section3Props extends SectionProps {
    projects: ProjectsType
}
