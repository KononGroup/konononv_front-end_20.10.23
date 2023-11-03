//task 10 writing loops
//1
// for (let i = 10; i < 21; i++){
//     console.log(`(${i}`);
// };

//2
// for (let i = 10; i < 21; i++){
//     console.log(`${i**2}`);
// };

//3
// for (let i = 0; i < 11; i++){
//     console.log(`${7 * i}`);
// };

//4
// let i = 0;
// let sum = 0;
// for (  i ; i < 16; i++) {
//     if (i % 2 === 0) {
//         sum += i ;
//     }
// };
// console.log(sum);

//5
// let i = 15;
// let sum =1;
// for (  i ; i < 36; i++) {
//     if (i % 2 === 0) {
//         sum *= i;
//     }
// };
// console.log(sum);

//6
// let sum = 0;
// for (let i = 0; i < 501; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//         console.log(sum);
//     }
// };
// const getAverage = sum / 500;

// console.log(getAverage);

//7
// let i = 30;
// let sum = 0;
// for (  i ; i < 81; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// };
// console.log(sum);

//8
// let i = 100;
// for (  i ; i < 202; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// };

//9,10, 11
// let naturalNum = +prompt('Enter any natural number', '...');
// let count = 0;
// let sum = 0;
// for (let i = 2; i * 2 <= naturalNum; i++) {
//   if (naturalNum % i === 0) {
//       console.log(`divider ${naturalNum} is ${i}`);

//       if (i % 2 === 0) {
//           count++
//           sum += i;
//       }
//   }
// };

// console.log(`number of even divisors: ${count}
// sum of even divisors: ${sum}`);

//12
// let table = "";

// for (a = 1; a <= 10; a++){

//     for (b = 1; b <= 10; b++) {

//         const result = String(a * b);
//         tt += ' '.repeat(4 - result.length) + result;
//     }
//     tt += '\n';
// }
// console.log(table);
//////////////////////////////////////////////////////////////////////////////////////////////////

//task 11 Folding cycles

//1
// for (let i = 20; i < 31; i += 0.5){
//     console.log(i);
// }

//2

// const dollarInUah = 27;
// for (let i = 10; i < 101; i += 10 ) {
//     let result = dollarInUah * i;
//     console.log(result);
// }

//3, 4, 5 
// let evenNum = +prompt('Enter any even number', '...');
// let N = evenNum;
// for (let i = 0; i < 100; i++) {
//     if (N > Math.pow(i, 2)) {
//       console.log(i);
//     }
// };
// for (let i = 2; i * 2 <= N; i++) {
//   if (N % i === 0) {
//       console.log(`you number is not prime`);
//         break
//   } else {
//       console.log(`you number is prime`);
//       break
//   }
// };
// console.log(N);

// while (N % 3 === 0) {
//     N /= 3;
// };

// console.log(N === 1 ? true : false );