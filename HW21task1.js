// class Human {
//     constructor(name, gender) {
//         this.name = name;
//         this.gender = gender;
//     }
// };


// class Apartment   {
//     constructor() {
//         this.residents = [];
//     }

//     addAResident(human) {
//         this.residents.push(human);
//     }
// };


// class House   {
//     constructor(maximumNumberOfApartments) {
      
//         this.apartments = [];
//         this.maximumNumberOfApartments = maximumNumberOfApartments;
//     }

//     addApartment(apartment) {
//         if (this.apartments.length < this.maximumNumberOfApartments) {
//             this.apartments.push(apartment)
//         } else {
//             console.log('the number of apartments exceeds the maximum number of apartments');
//         }
//     }
// };

// const human1 = new Human('John', 'male');
// const human2 = new Human('Sarah', 'female');
// const apartment1 = new Apartment();
// const apartment2 = new Apartment();
// apartment1.addAResident(human1);
// apartment2.addAResident(human1);
// apartment1.addAResident(human2);
// apartment2.addAResident(human2)
// const house1 = new House(3);
// const house2 = new House(1);
// house1.addApartment(apartment1)
// house1.addApartment(apartment2)
// house2.addApartment(apartment1)
// house2.addApartment(apartment2)
// console.log(human1, human2, apartment1, apartment2, house1, house2);

