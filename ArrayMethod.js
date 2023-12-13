let array = [1, 2, 3];
array.push(4); // Adds 4 to the end: [1, 2, 3, 4]
let popped = array.pop(); // Removes 4: [1, 2, 3]
console.log(popped); // Output: 4


let array = [1, 2, 3];
array.unshift(0); // Adds 0 to the beginning: [0, 1, 2, 3]
let shifted = array.shift(); // Removes 0: [1, 2, 3]
console.log(shifted); // Output: 0


let array1 = [1, 2];
let array2 = [3, 4];
let concatenated = array1.concat(array2); // Concatenates arrays: [1, 2, 3, 4]
let sliced = concatenated.slice(1, 3); // Slices elements: [2, 3]
console.log(concatenated);
console.log(sliced);


let array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // Output: true
console.log(array.indexOf(4)); // Output: 3




let array = [1, 2, 3];
array.forEach((element) => console.log(element)); // Output: 1, 2, 3
let mappedArray = array.map((element) => element * 2); // Doubles each element
console.log(mappedArray); // Output: [2, 4, 6]




let array = [5, 12, 8, 130, 44];
let found = array.find((element) => element > 10); // Finds first element > 10: 12
let foundIndex = array.findIndex((element) => element > 10); // Finds index of first element > 10: 1
console.log(found);
console.log(foundIndex);




let array = [1, 2, 3, 4, 5];
let filteredArray = array.filter((element) => element > 2); // Filters elements > 2
console.log(filteredArray); // Output: [3, 4, 5]
let sum = array.reduce((acc, curr) => acc + curr, 0); // Sums all elements
console.log(sum); // Output: 15



let array = [3, 1, 4, 2];
array.sort(); // Sorts array: [1, 2, 3, 4]
array.reverse(); // Reverses array: [4, 3, 2, 1]
console.log(array);


let array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5


let array = [1, 2, 3, 4, 5];
let arrayString = array.toString(); // Converts array to string: "1,2,3,4,5"
console.log(arrayString);


let array = ["Hello", "world", "!"];
let joinedString = array.join(" "); // Joins with space separator
console.log(joinedString); // Output: "Hello world !"


let array = [1, 2, [3, 4, [5, 6]]];
let flatArray = array.flat(2); // Flattens nested arrays
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]



let array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b'); // Removes 1 element at index 2 and adds 'a' and 'b'
console.log(array); // Output: [1, 2, 'a', 'b', 4, 5]






