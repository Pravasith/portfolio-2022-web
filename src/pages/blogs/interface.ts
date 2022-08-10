import { BlogsType } from "@lib/api/blogs/interface"
import { MediaGroupType } from "@lib/api/mediaGroups/interface"
import { TextGroupType } from "@lib/api/textGroups/interface"

export interface BlogProps {
    blogData: BlogsType
    textGroup: TextGroupType
    mediaGroup: MediaGroupType
}
