const Button = ({ text }: { text: string }) => {
    return (
        <>
            <button
                className="px-5 py-2 border-2 border-solid border-black"
                onClick={() => console.log("clicked")}
            >
                <p>{text}</p>
            </button>
        </>
    )
}

export default Button
