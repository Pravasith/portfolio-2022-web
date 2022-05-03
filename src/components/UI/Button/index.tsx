const Button = ({ text }: { text: string }) => {
    return (
        <>
            <button
                className={`
                    my-3
                    px-5 py-2
                    border-2 border-solid border-black 
                    active:bg-button-bgd-1 bg-150%
                    hover:bg-button-bgd-2
                `}
                onClick={() => console.log("clicked")}
            >
                <p className="font-calibre-bold">{text}</p>
            </button>
        </>
    )
}

export default Button
