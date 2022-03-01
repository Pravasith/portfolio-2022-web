import type { NextPage } from "next"

import styles from "@styles/Home.module.css"
import { useEffect, useRef } from "react"
import { useThree } from "@hooks/useThree"

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
        <div className={styles.container}>
            <main className={`${styles.main} bg-red-400`}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <div
                    className="threeCanvas"
                    ref={threeCanvasRef}
                    style={{ width: "50em", height: "30em" }}
                ></div>
            </main>
        </div>
    )
}

export default Home
