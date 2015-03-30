// arrows
var add = (a,b) => a+b;

console.log(add(1,2));

var people = ['Brian', 'Tricia', 'Wyatt', 'Max'];
people.forEach(p => {
        console.log(p);
    }
)

// classes

class Human {
    constructor(opts) {
        this.age = opts.age;
    }

    print() {
        console.log(this.age);
    }

    get description() {
        return this.age;
    }

}

class Person extends Human {
    constructor(opts) {
        super(opts);
        this.name = opts.name;
    }

    print() {
        super.print();
        console.log(this.name);
    }

    get description() {
        return super.description + ', ' + this.name + ', ' + this._gender;
    }

    set gender(g) {
        this._gender = g;
    }

    static isLivingThing() {
        return true;
    }
}

var p = new Person({name: 'brian', age: 37});
p.gender = 'male';
p.print();
console.log(p.description);
console.log(`Person.isLivingThing() = ${Person.isLivingThing()}`);

// sets
var s = new Set();
s.add('brian');
s.add('tricia');
s.add('wyatt');
s.add('max');
console.log(s.has('max'));