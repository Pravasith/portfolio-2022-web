import { showMenuScreen } from "@utils/actions/menuActions"
import { MenuContext } from "@utils/contexts/menuContext"
import { useContext } from "react"
import styles from "./index.module.scss"

const Hamburger = () => {
    const { state, dispatch } = useContext(MenuContext)

    const menuDisplayHandler = () => {
        dispatch && showMenuScreen(dispatch, !state?.showMenu)
    }

    return (
        <div
            className={`${styles.hamburger} flex-col-center bg-theme-yellow rounded-3xl w-15 h-15 p-5`}
            onClick={menuDisplayHandler}
        >
            <div className={`${styles.barWrap}  relative`}>
                <div
                    className={`${styles.bars} ${
                        state?.showMenu ? styles.closeBarT : null
                    }`}
                ></div>
                <div
                    className={`${styles.bars} ${
                        state?.showMenu ? styles.closeBarM : null
                    }`}
                ></div>
                <div
                    className={`${styles.bars} ${
                        state?.showMenu ? styles.closeBarB : null
                    }`}
                ></div>
            </div>
        </div>
    )
}

export default Hamburger
