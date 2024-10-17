// menu.jsx
class Menu {
    items;

    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    // Статический метод для фильтрации элементов меню
    static filterItems(items) {
        return items.filter(item => !item.startsWith("Удалить")); // Фильтрация элементов
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
