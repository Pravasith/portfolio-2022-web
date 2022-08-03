import styles from "./index.module.scss"

const Loader = () => (
    <div className={`w-full h-full flex-row-center z-20`}>
        <div
            className={`${styles.bounce_0} w-4 h-4 rounded-full m-2 bg-theme-orange `}
        ></div>
        <div
            className={`${styles.bounce_1} w-4 h-4 rounded-full m-2 bg-theme-yellow `}
        ></div>
        <div
            className={`${styles.bounce_2} w-4 h-4 rounded-full m-2 bg-theme-blue `}
        ></div>
    </div>
)

export default Loader
