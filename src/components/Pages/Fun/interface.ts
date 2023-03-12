import { ProjectType } from "@lib/api/projects/interface"
import { MediaBlockType } from "@lib/api/mediaGroups/interface"

export interface FunProps {
    projects: ProjectType[]
}

export interface BlogProps {
    mediaBlocks: MediaBlockType[]
}
