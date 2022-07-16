import { ProjectsType } from "@lib/api/projects/interface"
import { TextSectionType, TextBlockType } from "@lib/api/textGroups/interface"

export interface HomeProps {
    textSections: TextSectionType[]
    projects: ProjectsType
}

export interface SectionProps {
    textBlocks: TextBlockType[]
}

export interface Section3Props extends SectionProps {
    projects: ProjectsType
}
