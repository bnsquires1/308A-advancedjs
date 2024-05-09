console.log("Adventures")

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion2: {
            name: "Frank",
            type: "Flea",
            belongings: ["hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
};

adventurer.roll()
adventurer.roll()


console.log("===========")

console.log(adventurer.inventory[0])

console.log("===========")

for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i])
};

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
};

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Character.roll(); err: "character.roll is not a function" 

///////// pt 3

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    /// Adventurers should have the ability to run
    run() {
        console.log(`${this.name} is running ahead...`);
        super.roll();
    }
        /// Adventurers should have the ability to jump
        jump () {
            console.log(`${this.name} is jumping high!...`);
            super.roll();
        }
}
