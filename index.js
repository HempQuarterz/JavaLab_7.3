// class Hamster { constructor (name) {
//     this.owner = '';
//     this.name = name;
//     this.price = 15;
// }

// wheelRun() {
//     console.log(`squeak squeak`);
// }

// eatFood() {
//     console.log(`nibble nibbles`);
// }

// getPrice() {
//     return this.price;
// }
// }

// class Person { constructor (name) {
//     this.name = name;
//     this.age = 0;
//     this.height = 0;
//     this.weight = 0;
//     this.mood = 0;
//     this.hamsters = " ";
//     this.bankAccount = 0;
// }

// getName() { 
//     return this.name;
// }

// getAge() {
//     return this.age;
// }

// getWeight () {
//     return this.weight;
// }

// greet () {
//     console.log(`Hey, my name is ${this.name}.`);
// }

// eat () {
//     this.weight++; 
//     this.mood++;
// }

// exercise () {
//     this.weight --;
// }

// ageUp () {
//     this.age ++; 
//     this.height++;
//     this.weight++;
//     this.mood--,
//     this.bankAccount += 10;
// }

// buyHamster(hamster) {
//     this.hamsters.push(hamster);
//     this.mood += 10;
//     this.bankAccount -= hamster.getPrice();
// }
// }

// const timmy = new Person("Timmy");

// for (let i = 0; i < 5; i++) {
//     timmy.ageUp();
//   }

//   for (let i = 0; i < 5; i++) {
//     timmy.eat();
//   }

//   for (let i = 0; i < 5; i++) {
//     timmy.exercise();
//   }

//   for (let i = 0; i < 9; i++) {
//     timmy.ageUp();
//   }

//   const gus = new Hamster('Gus');
// gus.owner = 'Timmy';

// timmy.buyHamster(gus);

// for (let i = 0; i < 15; i++) {
//     timmy.ageUp();
//   }

// timmy.eat();
// timmy.eat();

// timmy.exercise();
// timmy.exercise();

////////////////////////////////////////////////

class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }

  const chef = new Chef();

const dinner1 = chef.createDinner('Pasta', 'Pizza', 'Yogurt');
const dinner2 = chef.createDinner('Salad', 'Steak', 'Gelato');
const dinner3 = chef.createDinner('Soup', 'Baked Chicken', 'Ice Cream');

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);
