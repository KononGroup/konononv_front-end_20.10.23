// class Student {
//     constructor(name, secondName, age, [...rating]) {
//         this.name = name;
//         this.secondName = secondName; 
//         this.age = age; 
//         this.rating = [...rating]
//         this.attendance = [];
//         this.attendance.length = 25;
//         this.attendance.fill(0)
//     }

//     present() {
//         for (let i = 0; i < this.attendance.length; i++) {
//             const el =  this.attendance[i]
//            if (el === 0) {
//                this.attendance[i] = true;
//                break;
//             };
//         };
//     }

//     absent() {
//          for (let i = 0; i < this.attendance.length; i++) {
//             const el =  this.attendance[i]
//            if (el === 0) {
//                this.attendance[i] = false;
//                break;
//             };
//         };

//     }

//     summary() {
//         let sum = 0;
        
//         this.rating.reduce(function (currentSum, currentNumber) {
//             sum = currentSum + currentNumber;
//             return sum
//         }, 0)
//         let average = sum / this.rating.length;

//         let sumAttendance = 0;

//         this.attendance.reduce(function (currentSum, currentNumber) {
//             if (currentNumber === true) {
//                 sumAttendance++;
//             }
//             return sum
//         }, 0)
//         let averageAttendance = sumAttendance / this.attendance.length;

//         if (average >= 90 && averageAttendance >= 0.9) {
//             console.log('molodec');
//         } else if (average >= 90 || averageAttendance >= 0.9) {
//             console.log('Good, but you can better');
//         } else {
//             console.log('red`ka');
//         }

//         console.log(average);
//         console.log(averageAttendance);
//     }
    
// }



// const ben = new Student('Ben', 'Parker', 63, [100, 20, 90, 100, 100, 100, 100, 100, 100, 100]);
// const sarah = new Student('Sarah', 'Konor', 40, [100, 20, 90, 100, 100, 100, 20, 20, 20, 20]);
// const john = new Student('John', 'Konor', 20, [100, 20, 90, 100, 100, 100, 100, 100, 100, 20]);

// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();
// john.present();


// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();
// ben.present();

// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();
// sarah.present();
// sarah.absent();


// ben.summary();
// sarah.summary();
// john.summary();


// console.log(ben);
// console.log(sarah);
// console.log(sarah);