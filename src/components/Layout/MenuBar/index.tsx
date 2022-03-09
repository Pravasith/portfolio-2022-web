import gsap from "gsap"
import Link from "next/link"
import { useRef } from "react"

const MenuBar = () => {
    const pages = ["Home", "Blogs", "Fun"]
    const background = useRef<HTMLDivElement>(null)

    enum EScale {
        SCALE_UP = "SCALE_UP",
        SCALE_DOWN = "SCALE_DOWN",
    }

    const showBackground = (scale: EScale) => {
        gsap.to(background.current, {
            width: scale === EScale.SCALE_UP ? "100%" : "0",
        })
    }

    return (
        <div className="w-1/5 fixed bottom-1/4 right-0">
            <ul className="flex-col-center">
                {pages.map((item, index) => (
                    <li
                        key={"whore-menu-" + index}
                        className="my-3 cursor-pointer"
                    >
                        <Link href="/">
                            <div
                                onMouseEnter={() =>
                                    showBackground(EScale.SCALE_UP)
                                }
                                onMouseLeave={() =>
                                    showBackground(EScale.SCALE_DOWN)
                                }
                                className="relative"
                            >
                                <div
                                    ref={background}
                                    className="absolute -z-10 w-full rounded origin-center bg-yellow-200 h-2/3 top-1/2"
                                ></div>
                                <a className="px-3 font-extrabold">{item}</a>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuBar
