import { ProjectType } from "./../projects/interface"
import { TextSectionType } from "@lib/api/textGroups/interface"

export interface IndexPageData {
    textSections: TextSectionType[]
    projects: ProjectType[]
}
