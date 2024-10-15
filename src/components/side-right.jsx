import styles from "../Core.module.scss";

export default function sideRight() {
    return (
        <div className={styles.side_right}>
            <div>
                <button className={styles.button_direction}>
                    ZR
                </button>
                <button className={styles.button_direction}>
                    R
                </button>
                <button className={styles.button_volume}>
                    +
                </button>
                <div>
                    <div>
                        <button className={styles.button}>
                            X
                        </button>
                    </div>
                    <div>
                        <button className={styles.button}>
                            A
                        </button>
                        <button className={styles.button}>
                            B
                        </button>
                    </div>
                    <div>
                        <button className={styles.button}>
                            Y
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <button className={styles.button_joystick}>
                    R
                </button>
            </div>
            <div>
                <button className={styles.button_home}>
                    Hm
                </button>
            </div>
        </div>
    )
}