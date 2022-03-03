import { Icon } from "@components/UI/Icons"
import { EIconSizes } from "@components/UI/Icons/interface"
import Link from "next/link"
import ContactLinksIcons from "./Icons"

const { TwitterIcon, GithubIcon, EmailIcon } = ContactLinksIcons

const ContactLinks = () => {
    return (
        <div className="w-1/5 fixed top-1/4">
            <div className="flex-col-center">
                <Link href={"https://twitter.com/pravasith"}>
                    <a className="m-2" target={"_blank"}>
                        <Icon size={EIconSizes.xs}>
                            <TwitterIcon />
                        </Icon>
                    </a>
                </Link>

                <Link href={"https://github.com/pravasith"}>
                    <a className="m-2" target={"_blank"}>
                        <Icon size={EIconSizes.xs}>
                            <GithubIcon />
                        </Icon>
                    </a>
                </Link>

                <Link href={"https://twitter.com/pravasith"}>
                    <a className="m-2" target={"_blank"}>
                        <Icon size={EIconSizes.xs}>
                            <EmailIcon />
                        </Icon>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ContactLinks
