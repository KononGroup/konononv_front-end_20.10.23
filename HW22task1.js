// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

    
//     displayInformation() {
//         console.log(`Name is ${this.name}, age is ${this.age} `);
        
//     }
// };


// class Car {
//     constructor(carModel, country,dateRelease , registrationMark) {
//         this.carModel = carModel;
//         this.country = country; 
//         this.dateRelease = dateRelease; 
//         this.registrationMark = registrationMark;
//         this.owner;
//     }

//     addOwner(owner){
//         owner.age > 18 ? this.owner = owner : console.log('You are under 18');
        
//     }

//     displayCar() {
//         console.log(`
//                 ${this.carModel},
//                 ${this.country},
//                 ${this.dateRelease},
//                 ${this.registrationMark}
//         `);
//         this.owner.displayInformation();
//     }

// }

// const stephan = new Human('Stephan', 21);
// const john = new Human('john', 22);
// const sarah = new Human('Sarah', 16);
// const bmw = new Car('bmw', 'Germany', 1998, 'KM9231232');
// const toyota = new Car('toyota', 'Japan', 1991, 'KM2231232')
// bmw.addOwner(stephan);
// bmw.addOwner(sarah);
// toyota.addOwner(sarah);
// toyota.addOwner(stephan);
// bmw.displayCar();
// toyota.displayCar();


