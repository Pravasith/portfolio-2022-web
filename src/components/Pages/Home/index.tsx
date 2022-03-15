import React from "react"
import Section1 from "./Section1"

const Home = () => {
    return (
        <div className={`flex flex-row justify-center w-full h-full`}>
            <div className="w-3/5">
                <Section1 />
            </div>
        </div>
    )
}

export default Home
