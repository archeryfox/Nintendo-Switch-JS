class  Chelovek  {
    Name = ''
    static LastName = ''
    #SurName = ''

    constructor(name, lastname, surname) {
        this.Name = name;
        this.LastName = lastname;
        this.#SurName = surname;
    }

    get SurName() {
        console.log("алялялаялаяал")
        return this.#SurName
    }

    toString() {
        return `Привет я ${this.Name} ${this.LastName} ${this.#SurName}`
    }

    introduce() {
        console.log(this.Name, this.LastName, this.#SurName)
    }
}


class Stundent extends Chelovek {
    constructor(name, lastname, surname, course, fakult) {
        super(name, lastname, surname);
        this.Course = course;
        this.Fakult = fakult;
    }

    toString() {
        return super.toString()+`\nа ещё я учусь на ${this.Course} курсе и мой факультет ${this.Fakult}`;
    }
}


let user = new Chelovek('Peter', 'Folavekev', 'Artyomovich')
const Daniely = new Stundent('Алёша','Попов', 'Венедиктович', 3, 'Архитектурный')

const petya = new Stundent(user.Name, user.LastName, "Shenderovich", 2, "Дизайн");

