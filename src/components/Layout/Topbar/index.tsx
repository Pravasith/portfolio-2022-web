import { EIconSizes } from "@components/UI/Icons/interface"
import { Icon } from "@components/UI/Icons"

import TopbarIcons from "./Icons"

const { SunMoon, MainLogo } = TopbarIcons

const Topbar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center my-7">
                <div className="w-1/5 flex-row-center">
                    <Icon size={EIconSizes.sm}>
                        <MainLogo />
                    </Icon>
                </div>
                <div className="w-1/5 flex-row-center">
                    <Icon size={EIconSizes.lg}>
                        <SunMoon />
                    </Icon>
                </div>
            </div>
        </>
    )
}

export default Topbar
