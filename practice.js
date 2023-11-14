

const text = "Hello, World!";

const sub3 = text.substring(0, 1); // "H" (negative start value treated as string's beginning)

const sub4 = text.slice(0, 1); // "H" (negative start value treated as string's beginning)
console.log(sub3);
console.log(sub4);
console.log(text.split(","))
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
console.log(text.split(""))
let text2 = "Please locate where 'locate' occurs!";
let index = text2.lastIndexOf("locate");
console.log(index)

let text3 = "Please locate where 'locate' occurs!";
let index3 = text3.indexOf("locate");
console.log(index3, 'this is indeXof')
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
console.log(newArr, "new array")
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => { return a - b })
console.log(points)
const array = [123, 45, 64, 222]

var randomNumber = array[0]

for (var i = 0; i < array.length; i++) {


    if (array[i] < randomNumber) {
        randomNumber = array[i]
    }
}
console.log(randomNumber)


const numbers1 = [45, 433, 9, 16, 25];

const maxlength = numbers1.find((item) => {

    return item > numbers1.length

}
)

console.log(maxlength, 'max length')



const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys((e) => {
    console.log('this is index', e)
})



const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const f = fruitss.entries();

for (let x of f) {
    console.log(x)
}


const dateObject = new Date()
console.log('this is dateObject', dateObject.toString())
console.l



const numbers444 = [45, 433, 9, 16, 25];


const mappedArray = numbers444.map((value) => {
    if (value > 100) {
        return value;
    }
}).join("")
console.log(' our return value', mappedArray)



const RandomNumber = Math.random()
console.log('random Number', RandomNumber * 11)



const person = { fname: "John", lname: "Doe", age: 25 };
let combineText = ''
for (x in person) {
    console.log('this is my combine Value', x)
}

const numbers = [1, 2, 3, 4, 4, 2, 1];

// Create a Set from the numbers array
const uniqueNumbersSet = new Set(numbers);

console.log(uniqueNumbersSet);
// Output: Set(4) { 1, 2, 3, 4 }

// If you want to convert it back to an array:
const uniqueNumbersArray = Array.from(uniqueNumbersSet);
console.log(uniqueNumbersArray);
// Output: [1, 2, 3, 4]
const wwww = ["Banana", "Orange", "Apple", "Mango"];
const wwwf = wwww.entries();
console.log(wwwf, 'this')

// wwwf.map((val)=>{
// console.log('this is value', val)
// })





class car {
    constructor(name) {
        this.name = name
    }
    present() {
        return this.model
    }
}

class dog extends car {
    constructor(name, model) {
        super(name)
        this.model = model
    }
}


const myCar = new dog('ejaz', 'axel')
console.log('my car', myCar.present())



x = 5
y = 10
x = x + y
y = x - y
x = x - y
console.log('x', x, 'y', y)

// const arrayAwesome = [1, 3, 4, 1, 3, 6, 6, 2, 3, 23, 22, 22, 24, 55, 55, 56, 57, 57]

// for (var i = 0; i < arrayAwesome.length; i++) {

//     for (var j = 0; j < arrayAwesome.length - i; j++) {

//         if (arrayAwesome[i] == arrayAwesome[i + j + 1]) {
//             arrayAwesome.splice(i + j + 1, 1)
//             console.log('array', arrayAwesome)
//         }
//     }
// }
// console.log('galat', arrayAwesome)
let arrayAwesome = [1, 3, 4, 1, 3, 6, 6, 2, 3, 77, 77, 34, 23, 22, 22, 24, 55, 55, 56, 57, 57];

// arrayAwesome = arrayAwesome.filter((value, index) => arrayAwesome.indexOf(value) === index);

// console.log('sahi', arrayAwesome);
var heightestNumber = Number.MIN_VALUE
var secondheightestNumber = Number.MIN_VALUE

for (var i = 0; i < arrayAwesome.length; i++) {

    if (arrayAwesome[i] > heightestNumber) {
        secondheightestNumber = heightestNumber
        heightestNumber = arrayAwesome[i]
    }
    else if (arrayAwesome[i] < heightestNumber && arrayAwesome[i] > secondheightestNumber) {
        secondheightestNumber = arrayAwesome[i]
    }
}
console.log('heigtestNumber', heightestNumber)
console.log('secondHeightest', secondheightestNumber)


const sortedArray = [1, 3, 5, 7, 8, 9];
var value = 9


var start = 0
var end = sortedArray.length - 1
var findNumber;
while (start <= end) {
    var middle = Math.floor((start + end) / 2)
    if (sortedArray[middle] == value) {
        findNumber = sortedArray[middle]
        break; // Exit the loop if the number is found

    }
    else if (sortedArray[middle] < value) {
        start = middle + 1
    }
    else if (sortedArray[middle] > value) {
        end = middle - 1
    }
}
console.log('finded Number is', findNumber)

const bubble = [11, 31, 9, 7, 8, 2];
for (var j = 0; j < bubble.length; j++) {
    for (var i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble[i + 1]) {
            temp = bubble[i + 1]
            bubble[i + 1] = bubble[i]
            bubble[i] = temp
        }

    }

}

let someAsyncFunction = () => {
    console.log('this is someasync')
}
const myFunction = async () => {
    // setTimeout with 3 seconds delay
    setTimeout(() => {
        console.log("Timeout executed after 3 seconds");
    }, 0);

    // Await something
    await someAsyncFunction();

    // Console after await
    console.log("Console after await");
};




myFunction()







function OuterFunc() {
    return function InnerFunc() {
        console.log('this is innerfunc')
    }
}

const outputOfOuterFunc = OuterFunc()
outputOfOuterFunc()


// function OuterFunc() {
//     return function InnerFunc() {
//       console.log('this is innerfunc  2')
//     }
// }

// const outputOfOuterFunc = OuterFunc();
// outputOfOuterFunc(); // This will call InnerFunc and print 'this is innerfunc'




var a = 5

for (var i = 1; i <= 5 - 1; i++) {
    a = a * i
}
console.log('this is Factorial', a)



const fabonaci = [0, 1]

for (var i = 0; i <= 5; i++) {
    fabonaci.push(fabonaci[i] + fabonaci[i + 1])
}
console.log('this is fabonaci', fabonaci)

const input = [5, 7, 9, 11, 15, 17]
var output;

for (var i = 0; i <= input.length - 1; i++) {
    if (input[i] + 2 != input[i + 1]) {
        console.log('ejaz')
        output = input[i] + 2
        break;
    }
}
console.log('this is output', output)




const input2 = [5, 7, 9, 11, 15, 17, 17, 5, 5, 5, 5];

function countOccurrences(arr) {
    const occurrenceMap = {};

    arr.forEach(item => {
        if (occurrenceMap[item]) {
            occurrenceMap[item]++;
        } else {
            occurrenceMap[item] = 1;
        }
    });

    return occurrenceMap;
}

const occurrences = countOccurrences(input2);
console.log(occurrences);
console.log('this is output22', Object.entries(occurrences).sort((a, b) => { return b[1] - a[1] }))

const stingArray = 'thiss is javascript code'
const arraySting = stingArray.split(' ')
console.log(arraySting)

const reversearray = arraySting.map((item) => {
    return (item.split('').reverse().join(''))

})
console.log('this is reverse', reversearray.join(" "))




const stingArray2 = 'thiss is javascript code'



const stingArray2Split = stingArray2.split("")
console.log(stingArray2Split)



const maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60
};

const sortable = Object.entries(maxSpeed)
console.log('object enteries', sortable.sort((a, b) => { return a[1] - b[1] }))
console.log('object enteries', Object.fromEntries(sortable.sort((a, b) => { return b[1] - a[1] })))


const maxSpeed2 = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60
};

console.log('this is convert object to array', Array.from(maxSpeed2))





const myObj = { a: 1, b: 2, c: 3 };
const arrayOfEntries = Object.entries(myObj);
console.log(arrayOfEntries);
// [['a', 1], ['b', 2], ['c', 3]]






const myObj2 = { a: 1, b: 2, c: 3 };
const keysArray = Object.keys(myObj2);
console.log(keysArray);

const valuesArray = Object.values(myObj2);
console.log(valuesArray);
// ['a', 'b', 'c'] // keysArray
// [1, 2, 3] // valuesArray



const myObj3 = { a: 1, b: 2, c: 3 };

const customArray = Object.keys(myObj3).map(key => ({ key, value: myObj3[key] }));
console.log(customArray);
// [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]




const input23 = [5, 7, 9, 11, 15, 17, 17, 5, 5, 5, 5];
const occurrencesObject = input23.reduce((intialValue, value, index) => {
    intialValue[index] = value
    return intialValue
}, {})
console.log('this is array to object', occurrencesObject);
// this is array to object {
//     '0': 5,
//     '1': 7,
//     '2': 9,
//     '3': 11,
//     '4': 15,
//     '5': 17,
//     '6': 17,
//     '7': 5,
//     '8': 5,
//     '9': 5,
//     '10': 5
//   }


// const subSumArray = [20, 15, 11, 18, 24]
// array k sub element ko sum karna hai usi index ko chor kar
const arraySum = [2, 7, 11, 4, -2]
const createdArrayForSum = []
for (var j = 0; j <= arraySum.length - 1; j++) {
    const selectedItem = arraySum[j]
    var arraySumthis = 0;
    for (var i = 0; i <= arraySum.length - 1; i++) {
        arraySumthis = arraySumthis + arraySum[i]
    }
    createdArrayForSum.push(arraySumthis - selectedItem)
}
console.log('getted array', createdArrayForSum)

// getted array [ 20, 15, 11, 18, 24 ]


const firstObject = { n: 1, b: 55, c: 3, d: 102, e: 122 };
const secondObject = { a: 1, e: 12, b: 55 };


let objectss = {}
for (let i in firstObject) {
    if (firstObject[i] == secondObject[i]) {
        objectss[i] = firstObject[i]
    }
}

console.log(objectss)

// { b: 55 }


const forheightestarray = [100,20, 15, 11, 18, 24, 21,44,76]

var firstHeighest = 0
var secondHeighest = 0


for (var i = 0; i <= forheightestarray.length; i++) {

    if (forheightestarray[i] > firstHeighest) {
        secondHeighest = firstHeighest

        firstHeighest = forheightestarray[i]
    }
    else if (forheightestarray[i] > secondHeighest && forheightestarray[i] < firstHeighest) {
        secondHeighest = forheightestarray[i]

    }

}

console.log('second heighest Number', secondHeighest)