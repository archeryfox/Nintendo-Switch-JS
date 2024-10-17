import styles from "../Core.module.scss";

export default function sideRight() {
    return (
        <div className={styles.side_right}>
            <div className="flex flex-col items-center w-full  justify-center">
                <button className={styles.button_direction}>
                    ZR
                </button>
                <button className={styles.button_direction}>
                    R
                </button>
                <div className="flex w-full justify-center flex-col">
                    <div className="flex w-full justify-center">
                        <button className={styles.button}>
                            X
                        </button>
                    </div>
                    <div className="flex gap-x-5 justify-center ">
                        <button className={styles.button}>
                            A
                        </button>
                        <button className={styles.button}>
                            B
                        </button>
                    </div>
                    <div className="flex w-full justify-center">
                        <button className={styles.button}>
                            Y
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <button className={styles.button_joystick}>
                    R
                </button>
            </div>
            <div className="flex w-full justify-center">
                <button className={styles.button_home}>
                    Hm
                </button>
            </div>
        </div>
    )
}
