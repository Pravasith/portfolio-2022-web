import React from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

const Home = () => {
    return (
        <div className={`flex flex-col justify-center w-full h-full`}>
            <div className="w-full h-full">
                {/* INTENTIONAL COMMENT: Keep this div because you need it for ScrollTrigger */}
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        </div>
    )
}

export default Home
