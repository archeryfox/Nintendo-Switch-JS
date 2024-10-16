// menu.jsx
class Menu {
    items;

    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    // Метод для возврата данных в виде строки
    toFormattedString() {
        return `Меню: ${this.items.join(", ")}`;
    }

    toString() {
        return `Меню: Опции: ${this.items.join(", ")}`;
    }
}

export default Menu;
