import { Icon } from "@components/UI/Icons"
import { EIconSizes } from "@components/UI/Icons/interface"
import Link from "next/link"
import { TwitterIcon, GithubIcon, EmailIcon } from "@components/SVGs/ContactBar"

const ContactBar = () => {
    const linkContent = [
        { link: "https://twitter.com/pravasith", icon: <TwitterIcon /> },
        { link: "https://github.com/pravasith", icon: <GithubIcon /> },
        {
            link: "mailto:pravasith@gmail.com?subject=Hey%20Pravas!%20A%20message%20for%20you!",
            icon: <EmailIcon />,
        },
    ]

    return (
        <div
            className={`
                top-1/4 z-10 
                tablet:fixed tablet:w-[15%]
                laptop:w-1/5
                desktop:w-[15%] 
            `}
        >
            <div className="flex-row-center tablet:flex-col-center">
                {linkContent.map((item, i) => (
                    <Link
                        key={`contact-link-${i}`}
                        href={item.link}
                        className="m-3"
                        target={"_blank"}
                        passHref
                    >
                        <Icon iconSize={EIconSizes.xs}>{item.icon}</Icon>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ContactBar
