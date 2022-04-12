import { CurvedText } from "./svgs"

const Section2 = () => {
    return (
        <div className="section-1-container h-screen relative">
            {/* SVG */}
            <div className="absolute w-1/2 top-1/4 right-0">
                <div className="flex-row-center w-full">
                    <div className="w-full relative">
                        <CurvedText />
                    </div>
                </div>
            </div>

            {/* TEXT */}
            <div className="section-1-text-block absolute top-1/5 left-1/2 w-96 bg-yellow-200">
                {/* <TextBlock textBlock={textBlock} /> */}
            </div>
        </div>
    )
}

export default Section2
