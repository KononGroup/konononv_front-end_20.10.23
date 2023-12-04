// class Hamburger  {
//     constructor(hamburger) {
//         this.prise;
//         this.calories
//         this.arrayPrises;
//         this.realPrise;
//     }

//     bigSize(){
//         this.prise = '100$';
//         this.calories = 40;
//         return this;
//     }

//     smallSize(){
//         this.prise = '50$';
//         this.calories = 20;
//         return this;
//     }

//     stuffingCheese() {
//         this.prise += '10$';
//         this.calories += 20;
//         return this;
//     }
//     stuffingSalad() {
//         this.prise += '20$';
//         this.calories += 5;
//         return this;
//     }
//     stuffingPotatoes() {
//         this.prise += '15$';
//         this.calories += 10;
//         return this;
//     }

//     seasoning() {
//         this.prise += '15$';
//         return this;
//     }

//     mayonnaise() {
//         this.prise += 20;
//         this.calories += 5;
//         return this;
//     }

//     calculateCalories() {
//         console.log(`Calories: ${this.calories}`);
//     }

//     calculatePrise() {
//         this.arrayPrises = this.prise.split('$');
//         let sum = 0;
//         this.arrayPrises.reduce(function (currentSum, currentNumber, ) {
//             currentNumber = +currentNumber;
//             sum = currentSum + currentNumber;
//             return sum
//         }, 0)
//         this.realPrise = sum;

//        return  console.log(`Prise: ${this.realPrise}`);
//     }
    

// };

// const hamb = new Hamburger();
// const hamb2 = new Hamburger();
// hamb.bigSize();
// hamb.stuffingCheese();
// hamb.seasoning();
// hamb.mayonnaise();
// hamb.calculateCalories();
// hamb.calculatePrise();

// hamb2.smallSize();
// hamb2.stuffingPotatoes();
// hamb2.seasoning();
// hamb2.mayonnaise();
// hamb2.calculateCalories();
// hamb2.calculatePrise();

// console.log(hamb);
// console.log(hamb2);