const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, num) {
    arr.splice(arr.indexOf(num), 1);
    console.log(num);

    return arr
}


removeElement(array, 5 );
console.log(array);
