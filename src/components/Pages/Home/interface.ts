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

export enum HomeSections {
    SECTION_1 = "home-section-1",
    SECTION_2 = "home-section-2",
    SECTION_3 = "home-section-3",
    SECTION_4 = "home-section-4",
}
