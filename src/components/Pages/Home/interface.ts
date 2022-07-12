import { ProjectsType } from "@lib/api/projects/interface"
import { TextGroupType, TextBlockType } from "@lib/api/textGroups/interface"

export interface HomeProps {
    textGroup: TextGroupType[]
    projects: ProjectsType
}

export interface SectionProps {
    textBlocks: TextBlockType[]
}

export interface Section3Props extends SectionProps {
    projects: ProjectsType
}
