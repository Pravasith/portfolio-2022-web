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
        <div className="w-1/5 fixed top-1/4 z-10">
            <div className="flex-col-center">
                {linkContent.map((item, i) => (
                    <Link key={`contact-link-${i}`} href={item.link}>
                        <a className="m-3" target={"_blank"}>
                            <Icon iconSize={EIconSizes.xs}>{item.icon}</Icon>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ContactBar
