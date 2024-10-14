import styles from "../Core.module.scss";
import viteLogo from "../../public/nintendo-switch.png";

export default function conScrOnOff(){
    return (
        <div>
            <button className={styles.button}>
                On/Off
            </button>
            <div>
                <img src={viteLogo} className='w-[833px] h-[344.61px]' alt="GameConsole"/>
            </div>
        </div>
    )
}