//12 Array search

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1.Find the sum and quantity of positive elements.
// let count = 0;
// let howManyPositiveNumbers = 0;
// for (const item of array) {
//     if (item > 0) {
//         count += item;
//         howManyPositiveNumbers++;
//     }
// }
// console.log(count, howManyPositiveNumbers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//2.Find the minimum array element and its sequence number.
// let min = array[0];
// for (const item of array) {
//     if (item < min) {
//         min = item;
//     };
// };
// console.log(min, array.indexOf(min));
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3.Find the maximum array element and its sequence number.
//  let max = array[0];
//   for (const item of array) {
//     if (item > max) {
//       max = item;
//     }
// };
// console.log(max, array.indexOf(max));
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//4. Determine the quantity of negative elements.
// let howManyNegativeNumbers = 0;
// for (const item of array) {
//     if (item < 0) {
//         howManyNegativeNumbers++;
//     }
// }
// console.log(howManyNegativeNumbers);
///////////////////////////////////////////////////////////////////////////////////////////////////////////


//5.Find the quantity of odd positive elements.
// let count = 0;
// for (const item of array) {
//     if (item > 0 && item % 2 === 1) {
//         count++;
//    }
// };
// console.log(count);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//6. Find the quantity of even positive elements
// let count = 0;
// for (const item of array) {
//     if (item > 0 && item % 2 === 0) {
//         count++;
//    }
// };
// console.log(count);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//7.Find the sum of even positive elements.
// let sum = 0;
// for (const item of array) {
//     if (item > 0 && item % 2 === 0) {
//         sum += item;
//    }
// };
// console.log(sum);
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//8.Find the sum of odd positive elements.
// let sum = 0;
// for (const item of array) {
//     if (item > 0 && item % 2 === 1) {
//         sum += item;
//    }
// };
// console.log(sum);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//9.Find the product of positive elements.

// let productOfFactors = 1;
// for (const item of array) {
//     if (item > 0) {
//         console.log(item);
//         productOfFactors *= item;
//    }
// };
// console.log(productOfFactors);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//10.Find the largest among the elements of the array, set the others to zero.

 let max = array[0];
  for (const item of array) {
    if (item > max) {
      max = item;
    }
};

array.splice(0, array.length, max);
console.log(array);