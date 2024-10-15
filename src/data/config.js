import User from "./user.jsx";
import Console from "./console.jsx";
import Game from "./game.jsx";
import Settings from "./settings.jsx";
import Menu from "./menu.jsx";
import Store from "./store.jsx";

// Конфигурация объектов
export const user1 = new User("Игрок 1", 15, 120);
export const user = new User("Игрок 2", 15, 120);
export const console1 = new Console("Nintendo Switch", 1000, "v1.05");
export const game1 = new Game("Zelda", "Adventure", 9);
export const settings1 = new Settings(80, 50, "Russian");
export const menu1 = new Menu(["Начать", "Настройки", "Помощь"]);
export const store1 = new Store(["Zelda", "Mario", "Alian Shooter"], "USD");
