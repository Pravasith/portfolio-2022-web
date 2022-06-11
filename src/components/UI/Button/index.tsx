const Button = ({
    text,
    type,
}: {
    text: string
    type?: "button" | "reset" | "submit"
}) => {
    return (
        <>
            <button
                type={type}
                className={`
                    my-3
                    px-5 py-2
                    border-2 border-solid border-black 
                    active:bg-button-bgd-1 bg-150%
                    hover:bg-button-bgd-2
                `}
            >
                <p className="font-calibre-bold">{text}</p>
            </button>
        </>
    )
}

export default Button
