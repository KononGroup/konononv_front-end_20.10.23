// class SuperMath {
//     constructor() {
//         this.x;
//         this.y;
//         this.znak;
        
//     }

//     check(obj) {
//         if (window.confirm(`Do you want to confirm the action with :${obj.x} ${obj.znak} ${obj.y} `)) {
//             let result = 0;
            
//             switch (obj.znak) {
//                 case '+':
//                     result = obj.x + obj.y;
//                     break;
//                 case '*':
//                     result = obj. x * obj.y;
//                     break;
//                 case '/':
//                     result = obj.x / obj.y;
//                     break;

//                 default:
                    
//                 break;
//             }
//             console.log(result);
//         } else {
//             this.input();
//         }
//     };

//     input() {
//         this.x = prompt('Enter x');
//         this.y = prompt('Enter y');
//         this.x = +this.x;
//         this.y = +this.y;
//         this.znak = prompt('Enter znak', 'please enter one of this symbols +, /, *,');
//         let result = 0;
//                 switch (this.znak) {
//                 case '+':
//                     result = this.x + this.y;
//                     break;
//                 case '*':
//                     result = this.x * this.y;
//                     break;
//                 case '/':
//                     result = this.x / this.y;
//                     break;

//                 default:

//                 break;
//             }
//             console.log(result);
//         return this;
//     }
// };

// obj1 = {
//     x: 12,
//     y: 3,
//     znak: '/'
// };


// obj2 = {
//     x: 14,
//     y: 5,
//     znak: '+'
// };


// obj3 = {
//     x: 10,
//     y: 5,
//     znak: '*'
// };

// const p = new SuperMath();
// p.check(obj1);

// console.log(p);