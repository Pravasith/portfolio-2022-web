import { UserDetailsType } from "@lib/api/blogs/interface"
import { MediaGroupType } from "@lib/api/mediaGroups/interface"
import { TextGroupType } from "@lib/api/textGroups/interface"

export interface BlogProps {
    details: {
        page: string
        id: string
        title: string
        timestamp: Date
        thumbnail: string
        userDetails: UserDetailsType
        tags: string[]
        textGroup: TextGroupType
        mediaGroup: MediaGroupType
    }
}
