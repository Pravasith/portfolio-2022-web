import { Html } from "@react-three/drei"
import Loader from "@ui/Loader"

const CanvasLoader = () => (
    <Html center prepend className="z-20">
        <Loader />
    </Html>
)

export default CanvasLoader
