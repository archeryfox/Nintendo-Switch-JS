// src/data/config.js
import User from "./User.js";
import Console from "./Console.js";
import Game from "./Game.js";
import Settings from "./settings.js";
import Menu from "./Menu.js";
import Store from "./Store.js";
import System from "./System.js";
import Special from "./Special.js";

// Конфигурация объектов с более детализированной структурой
export const user1 = new User({
    id: 111,
    username: "Крутой Чувак 78",
    level: 20,
    gamesPlayed: 120,
    friends: ["Leha", "Anton"],
    image: "https://cdn.ruplay.market/data/images/1e604f3e-6903-4385-80cf-53c90100bb62",
    firstname: "Человек",
    lastname: "Крутовый",
    phone: "+9089234812",
    email: "FEDROID123@gmial.com",
    balans: 100,
});

export const system1 = new System("Nintendo Switch", 1000, "v1.05", 60, 60, true, true, true);
export const console1 = new Special("Нинтендо ОС", 2017, "GJ21KL35");

export const game1 = new Game("Zelda: Breath of the Wild", "Adventure", 9, 100, "03.03.2017");
export const settings1 = new Settings(80, 50, "Russian", true, true);

export const menu1 = new Menu(["Начать", "Настройки", "Удалить", "Помощь"]);

export const store1 = new Store(
    [
        {
            title: "Zelda: Breath of the Wild",
            genre: "Adventure",
            rating: 9,
            image: "https://ir.ozone.ru/multimedia/c1000/1017819464.jpg"
        },
        {
            title: "Super Mario Odyssey",
            genre: "Platformer",
            rating: 8.5,
            image: "https://metarankings.ru/images/uploads/2023/10/super-mario-bros-wonder-cover-art.jpg"
        },
        {
            title: "Alien Shooter",
            genre: "Shooter",
            rating: 7,
            image: "https://th.bing.com/th/id/OIP.PfBgXYpsKuF-86RKEy3oMAHaLH?rs=1&pid=ImgDetMain"
        }
    ],
    "USD"
);
