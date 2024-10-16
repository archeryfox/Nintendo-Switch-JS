import User from "./user.jsx";
import Console from "./console.jsx";
import Game from "./game.jsx";
import Settings from "./settings.jsx";
import Menu from "./menu.jsx";
import Store from "./store.jsx";

// Конфигурация объектов с более детализированной структурой
export const user1 = new User({
    username: "Крутой Чувак 78",
    level: 20,
    gamesPlayed: 120,
    friends: ["Leha", "Anton"],
    image: "https://cdn.ruplay.market/data/images/1e604f3e-6903-4385-80cf-53c90100bb62"
});


export const console1 = new Console("Nintendo Switch", 1000, "v1.05");

export const game1 = new Game("Zelda: Breath of the Wild", "Adventure", 9);
export const settings1 = new Settings(80, 50, "Russian");

export const menu1 = new Menu(["Начать", "Настройки", "Помощь"]);

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
