//1. Create an array, the length and elements of which are specified by the user.
let userArray = [];

const userPrompt = prompt('Enter array elements', '12, 15, 512, 23123, 123123, 1, 5');

userArray = userPrompt.split(',');
console.log(userArray);