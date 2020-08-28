// // 1) ---------------- START ----------------------------
let animal = {}          
animal.name = 'Leo'
animal.energy = 10

animal.eat = function(amount){
    console.log(`${this.name} is eating`)
    this.energy += amount
}

animal.sleep = function(length){
    console.log(`${this.name} is sleeping`)
    this.energy += length
}

animal.play = function(length){
    console.log(`${this.name} is playing`)
    this.energy -= length
}

animal.play(5)
console.log(animal.energy)

// // What happen if we need to create more than one object? :(  
// // ---------------- END ----------------------------


// // 2) ---------------- START ----------------------------
// // ----------- FUNCTIONAL INSTANTIATION -----------------
function Animal (name, energy){
    let animal = {}
    animal.name = name
    animal.energy = energy

    animal.eat = function(amount){
    console.log(`${this.name} is eating`)
    this.energy += amount
    }   

    animal.sleep = function(length){
    console.log(`${this.name} is sleeping`)
    this.energy += length
    }

    animal.play = function(length){
    console.log(`${this.name} is playing`)
    this.energy -= length
    }

    return animal
}

const leo =  Animal('Leo', 10)
const dog =  Animal('dog', 3)
// // ---------------- END ----------------------------


// // 3) ---------------- START ----------------------------
// Everytime we create a new animal, we are recreating in memory each of these specific methods: eat, sleep & play ==> These are generic methods
// Instead of recreating those every time, we will create a new instance

// all these methods are created a single time in memory
// // ---------- Functional Instantiation with Shared Methods -------------
const animalMethods = {
    eat (amount){
        console.log(`${this.name} is eating`)
        this.energy += amount
    },   
    sleep(length){
        console.log(`${this.name} is sleeping`)
        this.energy += length
    },
    play(length){
        console.log(`${this.name} is playing`)
        this.energy -= length
    }
    //...run, ...
}

function Animal(name, energy){
    let animal = {}
    animal.name = name  
    animal.energy =  energy

// We're just referencing our animal methods object instead of recreating those every time
    animal.eat = animalMethods.eat           //animal.eat is a reference of animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play

    return animal
}

const leo =  Animal('Leo', 10)
const dog =  Animal('dog', 3)

//Object always be able to reference any of the methods that are located in the animal methods
// // ---------------- END ----------------------------


// // 4) ---------------- START ----------------------------
// // ---------- Object.create -------------
// // ----------Functional Instantiation with Shared Methods and Object.create ------

const parent = {
   name: 'Laura',
   age: 31,
   heritage: 'I do not know'
}
const child = Object.create(parent)
child.name = 'Alejandra'
child.age = 3
console.log(child.name)
console.log(child.age)
console.log(child.heritage)


 const animalMethods = {
    eat (amount){
        console.log(`${this.name} is eating`)
        this.energy += amount
    },   
    sleep(length){
        console.log(`${this.name} is sleeping`)
        this.energy += length
    },
    play(length){
        console.log(`${this.name} is playing`)
        this.energy -= length
    }
    //...run, ...
}

function Animal(name, energy){
    let animal = Object.create(animalMethods)
    animal.name = name  
    animal.energy =  energy

    return animal
}

const leo =  Animal ('leo', 7)
leo.play(3) //Leo doesn't have a play method
// // ---------------- END ----------------------------


// // 5) ---------------- START ----------------------------
// ---------------- Prototypal Instantiation ----------------------------

Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`)
    this.energy += amount
}
Animal.prototype.sleep = function(length){
    console.log(`${this.name} is sleeping`)
    this.energy += length
}
Animal.prototype.play = function(length){
    console.log(`${this.name} is playing`)
    this.energy -= length
}

function Animal(name, energy){
    let animal = Object.create(Animal.prototype)
    animal.name = name  
    animal.energy =  energy

    return animal
}
const leo = Animal('Leo', 7)
leo.play(5)
// // ---------------- END ----------------------------



// // 6) ---------------- START ----------------------------
// AnimalWithNew.prototype.eat = function(amount){
//     console.log(`${this.name} is eating`)
//     this.energy += amount
// }
// AnimalWithNew.prototype.sleep = function(length){
//     console.log(`${this.name} is sleeping`)
//     this.energy =+ length
// }
// AnimalWithNew.prototype.play = function(length){
//     console.log(`${this.name} is playing`)
//     this.energy =+ length
// }

// function AnimalWithNew(name, energy){
//     this.name = name  
//     this.energy =  energy
// }

// let leo = new AnimalWithNew('leo', 7)
// // ---------------- END ----------------------------


// // 6) ---------------- START ----------------------------
// es6

class Animal { 
    constructor(name, energy){
        this.name = name
        this.energy = energy
    }
    eat(amount){
        console.log(`${this.name} is eating`)
        this.energy += amount
    }
    sleep(length){
        console.log(`${this.name} is sleeping`)
        this.energy =+ length

    }
    play(length){
        console.log(`${this.name} is playing`)
        this.energy =+ length
    }
}

let leo = new Animal('leo', 7)
// // ---------------- END ----------------------------


// // 7) ---------------- START ----------------------------
// // Methods that we don’t want to share it amongst all instances.
// class Animal {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
// }
  
// function nextToEat (animals) {
//     const sortedByLeastEnergy = animals.sort((a,b) => {
//       return a.energy - b.energy
//     })
//     return sortedByLeastEnergy[0].name
// }
  
// const leo = new Animal('Leo', 7)
// const snoop = new Animal('Snoop', 10)
  
// console.log(nextToEat([leo, snoop])) // Leo


// // 8) ---------------- START ----------------------------
//   class Animal {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//     static nextToEat(animals) {
//       const sortedByLeastEnergy = animals.sort((a,b) => {
//         return a.energy - b.energy
//       })
  
//       return sortedByLeastEnergy[0].name
//     }
//   }

// const leo = new Animal('Leo', 7)
// const snoop = new Animal('Snoop', 10)
  
// console.log(Animal.nextToEat([leo, snoop])) // Leo

  //Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.
