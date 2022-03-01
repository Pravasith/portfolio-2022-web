import styles from "./Topbar.module.scss"

const Topbar = () => {
    return (
        <>
            <div className={`${styles.container} h-32  flex-row-north-east`}>
                <div className="bg-green-400 w-10 h-10"></div>
                <div className="bg-yellow-400 w-10 h-10"></div>
                <div className="bg-red-400 w-10 h-10"></div>
            </div>
        </>
    )
}

export default Topbar
