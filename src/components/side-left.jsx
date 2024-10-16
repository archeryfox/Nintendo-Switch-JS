import styles from "../Core.module.scss";

export default function sideLeft() {
    return (
        <div className={styles.side_left}>
            <div>
                <button className={styles.button_direction}>
                    ZL
                </button>
                <button className={styles.button_direction}>
                    L
                </button>
                <button className={styles.button_joystick}>
                    L
                </button>
            </div>
            <div>
                <div>
                    <button className={styles.button}>
                        &#8657;
                    </button>
                </div>
                <div className="flex">
                    <button className={styles.button}>
                        &#8656;
                    </button>
                    <button className={styles.button}>
                        &#8658;
                    </button>
                </div>
                <div>
                    <button className={styles.button}>
                        &#8659;
                    </button>
                </div>
            </div>
            <div>
                <button className={styles.button_sreenshot}>
                    Scr
                </button>
            </div>
        </div>
    )
}