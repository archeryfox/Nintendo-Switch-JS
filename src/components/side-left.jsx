import styles from "../Core.module.scss";

export default function sideLeft(){
    return (
        <div className={styles.side_left}>
            <div>
                <button className={styles.button_direction}>
                    Left
                </button>
                <button className={styles.button_volume}>
                    -
                </button>
                <button className={styles.button_joystick}>
                    LJ
                </button>
            </div>
            <div>
                <div>
                    <button className={styles.button}>
                        &#8657;
                    </button>
                </div>
                <div>
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