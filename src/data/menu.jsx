class Menu {
    #items;

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    toString() {
        return `Menu: Options: ${this.#items.join(", ")}`;
    }
}

export default Menu;