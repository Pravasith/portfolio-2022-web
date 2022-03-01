import type { NextPage } from "next"

import { useEffect, useRef } from "react"
import { useThree } from "@hooks/useThree"
import Meta from "@components/Meta"
import Layout from "@components/Layout"

const Home: NextPage = () => {
    const threeCanvasRef = useRef<HTMLDivElement>(null)
    const [threeBasics, renderOptions] = useThree(threeCanvasRef)

    useEffect(() => {
        if (renderOptions && threeBasics) {
            renderOptions.start()

            setTimeout(() => {
                renderOptions.stop()
            }, 3000)

            return () => {
                renderOptions.stop()
            }
        }
    }, [threeBasics, renderOptions])

    return (
        <main style={{ height: "100%", width: "100%", background: "red" }}>
            <Meta />
            <Layout>
                <h1>Hello portfolio 2022!</h1>
            </Layout>
        </main>
    )
}

export default Home
