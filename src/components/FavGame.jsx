import React from 'react'; // Импорт библиотеки React
import styles from "../Core.module.scss"; // Импорт CSS модулей для стилизации
import zeldaOne from '../../public/zelda-1.png'; // Импорт первой картинки Zelda
import zeldaTwo from '../../public/zelda-2.png'; // Импорт второй картинки Zelda
import zeldaThree from '../../public/zelda-3.png'; // Импорт третьей картинки Zelda
import zeldaFour from '../../public/zelda-4.png'; // Импорт четвертой картинки Zelda

// Основная функциональная компонента FavGame
export default function FavGame() {
    return (
        <div>
            <div className={styles.fav_game}> // Секция с первой картинкой и описанием
                <h2 className={styles.fav_h}>МИР Zelda: Tears of the Kingdom</h2>
                <p className={styles.fav_p}>
                    Это потрясающее место со своими секретами и загадками.
                    Великолепные визуальные эффекты и продуманные детали
                    создают уникальную атмосферу приключения.
                </p>
                <img src={zeldaOne}/> // Первая картинка
            </div>
            <div className={styles.fav_game}> // Секция со второй картинкой и описанием
                <h2 className={styles.fav_h}>Битва с Боссом</h2>
                <p className={styles.fav_p}>
                    Эпическая битва с одним из многих сложных боссов игры.
                    Зрелищные спецэффекты и динамичное управление заставляют сердце биться чаще.
                </p>
                <img src={zeldaTwo}/> // Вторая картинка
            </div>
            <div className={styles.fav_game}> // Секция с третьей картинкой и описанием
                <h2 className={styles.fav_h}>Занимательные Загадки</h2>
                <p className={styles.fav_p}>
                    На этом скриншоте показана одна из множества головоломок, которые
                    необходимо решить, чтобы продвигаться по сюжету. Инновационные
                    подходы к задачам делают каждую головоломку уникальной.
                </p>
                <img src={zeldaThree}/> // Третья картинка
            </div>
            <div className={styles.fav_game}> // Секция с четвертой картинкой и описанием
                <h2 className={styles.fav_h}>Мир Игры</h2>
                <p className={styles.fav_p}>
                    Пейзаж открытого мира с его природными красотами и разнообразными биомами.
                    Игроки могут свободно исследовать огромные территории, находить
                    скрытые объекты и выполнять побочные квесты.
                </p>
                <img src={zeldaFour}/> // Четвертая картинка
            </div>
        </div>
    );
}
