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
