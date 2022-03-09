import { Icon } from "@components/UI/Icons"
import { EIconSizes } from "@components/UI/Icons/interface"
import Link from "next/link"
import ContactBarIcons from "./Icons"

const { TwitterIcon, GithubIcon, EmailIcon } = ContactBarIcons

const ContactBar = () => {
    return (
        <div className="w-1/5 fixed top-1/4">
            <div className="flex-col-center">
                <Link href={"https://twitter.com/pravasith"}>
                    <a className="m-4" target={"_blank"}>
                        <Icon iconSize={EIconSizes.xs}>
                            <TwitterIcon />
                        </Icon>
                    </a>
                </Link>

                <Link href={"https://github.com/pravasith"}>
                    <a className="m-4" target={"_blank"}>
                        <Icon iconSize={EIconSizes.xs}>
                            <GithubIcon />
                        </Icon>
                    </a>
                </Link>

                <Link
                    href={
                        "mailto:pravasith@gmail.com?subject=Hey%20Pravas!%20A%20message%20for%20you!"
                    }
                >
                    <a className="m-4" target={"_blank"}>
                        <Icon iconSize={EIconSizes.xs}>
                            <EmailIcon />
                        </Icon>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ContactBar
