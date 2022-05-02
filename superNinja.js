class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name, this.health, this.speed, this.strength);
    }

    drinksake() {
        this.health += 10;
        console.log(this.health);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinksake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

const ninja = new Sensei('Billy');

ninja.sayName();
ninja.showStats();
ninja.drinksake();
ninja.speakWisdom();