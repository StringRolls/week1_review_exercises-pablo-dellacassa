// --------ARRAYS--------

// Exercise 1:
// Write a function that takes as a first argument the number of times you want to repeat certain value and
// the value you want to repeat as the second argument. Then it should return a new array with the given values.
// Example:
// fill(3, 'a'); // expected output => ['a', 'a', 'a']

function repeat (numberRepeat, value) {
    const array = []
    for (let i = 0; i < numberRepeat; i++) {
        array.push(value)
    };
    return array;
};

console.log(repeat (3, 'a'))

// Exercise 2:
// Write a function that takes an array as the only argument and reverts it. Avoid using array.prototype.reverse().
// Example:
// reverse([1,2,3]); // expected output => [3,2,1]

function reverse (array) {
    const reverseArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        reverseArray.push(array[i])
    };
    return reverseArray
} 
const firstName = "Pablo"

console.log(reverse (firstName))

// Exercise 3:
// Write a function that clears an array from all unnecessary elements (false, undefined, empty strings, 0, null).
// Example:
// compact([0, 1, false, 2, undefined, '', 3, null]); // expected output => [1,2,3]

function clearArray (array) {
    const arr = array.filter(value => {
        return value !== false & value !== undefined && value !== null && value !== 0 && value !== ""; 
    })
    return arr;
};

console.log(clearArray (["Pablo", 0, null, undefined, "", false]))

// Exercise 4:
// Write a function that takes as an argument an array of arrays and returns an object composed of key-value pairs.
// Example: 
// formPairs([['a', 1],['b', 2]]); // expected output => { a: 1, b: 2}

function arrayToObject (array) {
    object = {};
    for (let i=0; i < array.length; i++) {
        for (let k=1; k < array[i].length; k++) {
            object[array[i][0]] = array[i][k] 
        };
    }; 
    return object;
};

console.log(arrayToObject ([["a",1], ["b",2], ["c", 3]]))


// Exercise 5:
// Write a function that takes an array as a first argument and then two values as the second and third argument.
// It should return an array without the two values passed as arguments.
// Example:
// without([1,2,3,1,2], 1, 2); // expected output => [3]

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filteredArray (array, value1, value2) {
    const newArray = array.filter(arrayValue => {
        return arrayValue !== value1 && arrayValue !== value2
    });
    return newArray
}

const arrayWithout = [1,2,3,1,2]

console.log(filteredArray((arrayWithout), 1,2))

// Exercise 6:
// Write a function that takes two arrays as arguments and compares if they are identical.
// Example: 
// isEqual([1, 2, 3, 4],[1, 2, 3, 4]) // expected output => true
// isEqual([1, 2, 3, 4],[1, 2, 3, 4, 5]) // expected output => false

function isEqual (array1, array2) {
    const output = [];
    if (array1.length === array2.length && array1.length !==0) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                output.push(false)
            };
        } if (output.includes(false)) {
            return false
        } else {
            return true
        }
    }else if (array1.length === 0) {
        return "Empty array"
    } else {
        return false
    };
};

const array1 = [1,2,3,4];
const array2 = [1,2,3,4];
const array3 = [1,2,3,5];

console.log(isEqual(array1, array2))

// Bonus – Exercise 7: 
// Write a function that takes an array as the first argument and a number as the second argument.
// It should return the array split into parts of the determined size.
// Example:
// chunk([1, 2, 3, 4, 5, 6, 7], 2); // expected output => [[1, 2], [3, 4], [5, 6], [7]]

function split (array, number) {
    if (number === 0){
        return array
    } else {
    const newArray = [];
        for (let i = 0; i < array.length; i += number){
            newArray.push(array.slice(i, i+number)); 
    };
    return newArray}
};

console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
