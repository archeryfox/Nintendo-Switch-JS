class Menu {
    items;

    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    toString() {
        return `Меню: Опции: ${this.items.join(", ")}`;
    }
}

export default Menu;