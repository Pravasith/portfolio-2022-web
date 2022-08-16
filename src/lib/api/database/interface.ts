import { TextSectionType } from "@lib/api/textGroups/interface"
import { ProjectsType } from "@lib/api/projects/interface"

export interface IndexPageData {
    textSections: TextSectionType[]
    projects: ProjectsType[]
}
