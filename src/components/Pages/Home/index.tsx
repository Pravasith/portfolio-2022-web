import React from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

const Home = () => {
    return (
        <div className={`flex flex-row justify-center w-full h-full`}>
            <div className="w-3/5">
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        </div>
    )
}

export default Home
