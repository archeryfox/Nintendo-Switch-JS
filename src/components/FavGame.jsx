import React from 'react';
import styles from "../Core.module.scss";
import zeldaOne from '../../public/zelda-1.png';
import zeldaTwo from '../../public/zelda-2.png';
import zeldaThree from '../../public/zelda-3.png'
import zeldaFour from '../../public/zelda-4.png'

export default function FavGame() {
    return (
        <div>
            <div className={styles.fav_game}>
                <h2 className={styles.fav_h}>МИР Zelda: Tears of the Kingdom</h2>
                <p className={styles.fav_p}>Это потрясающее место со своими секретами и загадками.
                    Великолепные визуальные эффекты и продуманные детали
                    создают уникальную атмосферу приключения.
                </p>
                <img src={zeldaOne}/>
            </div>
            <div className={styles.fav_game}>
                <h2 className={styles.fav_h}>Битва с Боссом</h2>
                <p className={styles.fav_p}>Эпическая битва с одним из многих сложных боссов игры.
                    Зрелищные спецэффекты и динамичное управление заставляют сердце биться чаще.
                </p>
                <img src={zeldaTwo}/>
            </div>
            <div className={styles.fav_game}>
                <h2 className={styles.fav_h}>Занимательные Загадки</h2>
                <p className={styles.fav_p}>На этом скриншоте показана одна из множества головоломок, которые
                    необходимо решить, чтобы продвигаться по сюжету. Инновационные 
                    подходы к задачам делают каждую головоломку уникальной.
                </p>
                <img src={zeldaThree}/>
            </div>
            <div className={styles.fav_game}>
                <h2 className={styles.fav_h}>Мир Игры</h2>
                <p className={styles.fav_p}>Пейзаж открытого мира с его природными красотами и разнообразными биомами.
                    Игроки могут свободно исследовать огромные территории, находить 
                    скрытые объекты и выполнять побочные квесты.
                </p>
                <img src={zeldaFour}/>
            </div>
        </div>
    )
}