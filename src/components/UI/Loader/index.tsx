import styles from "./index.module.scss"

const Loader = () => (
    <div className={`w-full h-full flex-row-center z-20`}>
        <div
            className={`${styles.bounce_0} w-5 h-5 rounded-full m-2 bg-theme-orange border-2 border-white`}
        ></div>
        <div
            className={`${styles.bounce_1} w-5 h-5 rounded-full m-2 bg-theme-yellow border-2 border-white`}
        ></div>
        <div
            className={`${styles.bounce_2} w-5 h-5 rounded-full m-2 bg-theme-blue border-2 border-white`}
        ></div>
    </div>
)

export default Loader
