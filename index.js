7
const numberOne = +prompt('Write tree numbers for average', 'First number');
const numberTwo = +prompt('Write tree numbers for average', 'Second number');
const numberTree = +prompt('Write tree numbers for average', 'Third number');

const average = (numberOne + numberTwo + numberTree) / 3;

alert(`You average is ${average}`);
//////////////////////////////////////////////////////////////////////////////////


//8

// const age = prompt('What age are you?', '18');

//  if (age === null) {
//         alert(`It's a pity that you didn't want to enter yours Age`)
//     }
// const city = prompt('What city do you live in', 'Odesa');
//  if (city === null) {
//         alert(`It's a pity that you didn't want to enter yours city`)
//     }
// const favoriteSport = prompt('Your favorite sport', 'tennis');
//   if (favoriteSport === null) {
//         alert(`It's a pity that you didn't want to enter yours favoriteSport`)
//     }

// if (city === 'Kyiv' ) {
//     alert(`you age is ${age}
    
//     you live in the capital Of Ukraie
//     `)
// } if (city === 'Washington' ) {
//     alert(`you age is ${age}
    
//     you live in the capital Of USA
//     `)
// } if (city === 'London') {
//     alert(`you age is ${age}
    
//     you live in the capital Of Great Britain
//     `)
// } else {
//         alert(`you age is ${age}
    
//     you live in the ${city}
//     `)
// };
   

// const sport = prompt('choose the sport you like most: football, box, basketball', 'box');


// switch (sport) {
//     case 'box':
//         alert(`Cool! do you want to become Alexand Usik`);
//         break;
//     case 'football':
//         alert(`Cool! do you want to become Leo Messi`);
//         break;
//     case 'basketball':
//         alert(`Cool! do you want to become Lebron James`);
//         break;
//     default:
//         alert(`It's a pity that you didn't choose a sport`)
// }

///////////////////////////////////////////////////////////////////////////////
//9.

// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN(numOrStr) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// };





// switch (true) {
//     case null:
//         console.log('you canceled');
//         break;
//     case '':
//         console.log('Empty String');
//         break;
//     case isNaN(numOrStr):
//         console.log('number is Ba_Nan');
//         break
//     default:
//         console.log('OK!');
//         break;
// };