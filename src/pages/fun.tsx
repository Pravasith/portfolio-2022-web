import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Fun from "@components/Pages/Fun"
import { MediaBlockType } from "@lib/api/mediaBlocks/interface"
import api from "@services/api"
import { API_ROUTE_URLS } from "@lib/api/textBlocks"
import { metaData } from "@utils/constants"

interface FunPageProps {
    mediaBlocks: MediaBlockType[]
}

const FunPage: NextPage<FunPageProps> = ({ mediaBlocks }) => {
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Fun mediaBlocks={mediaBlocks} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // let funPageTextBlocks: TextBlocksType[] = [],
    let funPageMediaBlocks: MediaBlockType[] = []

    // await api
    //     .GET<TextBlocksType[]>(
    //         API_ROUTE_URLS.GET_TEXT_BLOCKS_BY_TYPE + ETextBlockTypes.HOME_PAGE
    //     )
    //     .then(res => {
    //         homePageTextBlocks = res
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })

    await api
        .GET<MediaBlockType[]>(API_ROUTE_URLS.GET_MEDIA_BLOCKS_BY_PAGE + "fun")
        .then(res => {
            funPageMediaBlocks = res
        })
        .catch(err => {
            console.error(err)
        })

    return {
        props: {
            mediaBlocks: funPageMediaBlocks,
        },
    }
}

export default FunPage
