

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
console.log('this is minimum number', randomNumber)
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
    console.log('this is from enteries', x)
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
console.log('array.from of object', uniqueNumbersArray);
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
console.log('this is output22', (Object.entries(occurrences).sort((a, b) => { return b[1] - a[1] })).flat())
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


const forheightestarray = [100, 20, 15, 11, 18, 24, 21, 44, 76]

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



const funcSpeard = (...rest) => {
    [a, ...b] = rest
    console.log('this is rest operator', b)

}
const arrayNumber = [1, 2, 3]
funcSpeard(...arrayNumber)

const reverseByWord = 'this is javascript code'
const stringToArray = reverseByWord.split(' ')
var start = 0
var end = stringToArray.length - 1
while (start < end) {
    console.log('tshi')

    var temp = stringToArray[start]
    stringToArray[start] = stringToArray[end]
    stringToArray[end] = temp
    start++
    end--

}

console.log('this is awesome', stringToArray.join(' '))
const palindrome = "deified open radar level rotor noon"
const palindromeArray = palindrome.split(' ')
console.log(palindromeArray)


// const palindromeArrayFilter = palindromeArray.filter((element) => {

//     const reserveElment = element.split('').reverse().join('')
//     if (reserveElment == element) {
//         return element
//     }


// })

const palindromeArrayFilter = palindromeArray.filter((element) => {
    const reserveElment = element.split('')
    var start = 0
    var end = reserveElment.length - 1
    while (start < end) {
        var temp = reserveElment[start]
        reserveElment[start] = reserveElment[end]
        reserveElment[end] = temp
        start++
        end--
    }
    if (reserveElment.join('') == element) {
        return element
    }
})
console.log('this is array which is palidropme', palindromeArrayFilter.join(' '))

const firstArray = [1, 5, 3, 55, 33,]
const secondArray = [1, 2, 3, 22, 33]
const resultArray = []

for (var i = 0; i < firstArray.length; i++) {
    if (secondArray.includes(firstArray[i])) {
        console.log('this')
    }
    else {
        resultArray.push(firstArray[i])
    }
    if (firstArray.includes(secondArray[i])) {
    }
    else {
        resultArray.push(secondArray[i])
    }
}
console.log('result array', resultArray)

const forSum = [1, 2, 3, 4, 5, 6, 7, 13, 7, 1]
var backsum = 0;

for (var i = 0; i < forSum.length; i++) {

    var innerSUm = 0;
    for (var j = i; j < forSum.length; j++) {
        innerSUm = innerSUm + forSum[j]
    }
    backsum = backsum + forSum[i]
    // console.log('this is number back', backsum)
    // console.log('this is number front', innerSUm)
    if (innerSUm == backsum) {
        console.log('this is equal', forSum[i])
    }
    else {
        // console.log('this is not equal')
    }
}


const passingFunc = (b, c) => {
    b = 11
    c[0] = 9
}
var a = 3
var arry = [1, 2]
passingFunc(a, arry)

const accurranceArray = [2, 2, 3, 4, 4, 52, 3]
const accurranceObject = {}

for (var i = 0; i < accurranceArray.length; i++) {
    if (accurranceObject[accurranceArray[i]]) {
        accurranceObject[accurranceArray[i]]++

    }
    else {
        accurranceObject[accurranceArray[i]] = 1
    }
}
console.log(accurranceObject[2])

var sum = 10
const arraySumPair = [1, 2, 3, 4, 5, 6, 7, 1, 8, 9, 9]

for (var j = 0; j < arraySumPair.length; j++) {
    for (var i = 0; i < arraySumPair.length - j; i++) {
        if (arraySumPair[j] + arraySumPair[i] == sum) {
            console.log('this is pair', arraySumPair[j], arraySumPair[i])
        }
    }
}

const arraySumPairArray = arraySumPair.forEach((value, index) => {
    if (arraySumPair.indexOf(value) !== index) {
        arraySumPair.splice(index, 1)
    }
})
console.log('duplicate value', arraySumPair)



const DuplicateNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 1, 8, 9, 5, 33, 1, 22, 1, 5, 5, 5, 5, 5]

const duplicateArrayRemove = DuplicateNumbers.filter((value, index, array) => {

    return array.indexOf(value) === index


})

console.log('duplicate remove', duplicateArrayRemove)

const minn = Number.MAX_VALUE
console.log('the value is:', minn)




let sssss = ['a', 'b', 'c'];

for (let index of sssss) {
    console.log(index); // Outputs indices: 0, 1, 2
}



let sssssss = ['a', 'b', 'c'];
let iterator = sssssss.entries();
const desireObject = {}

for (let entry in sssssss) {
    desireObject[entry] = sssssss[entry]
}



const Numberss = Math.min()
console.log("min function", Numberss)


const Numberss2 = Math.max()
console.log("max function", Numberss2)

const evenOddArray = [2, 1, 4, 5, 23, 3, 4]

evenOddArray.forEach((Number) => {
    if (Number & 0 !== 1) {
        console.log('Odd')
    }
    else {
        console.log('even')
    }

})


const sorthis = [2, 55, 1, 4, 5, 23, 3, 4]

for (var j = 0; j < sorthis.length; j++) {
    for (var i = 0; i < sorthis.length; i++) {
        if (sorthis[i] > sorthis[i + 1]) {
            var temp = sorthis[i]
            sorthis[i] = sorthis[i + 1]
            sorthis[i + 1] = temp
        }
    }
}

console.log('sorted array', sorthis)


const MaxNumberArray = [2, 55, 1, 100, 4, 5, 23, 3, 4]
var maxNumber = 0
for (var j = 0; j < MaxNumberArray.length; j++) {
    if (MaxNumberArray[j] > maxNumber) {
        maxNumber = MaxNumberArray[j]
    }
}

console.log("Maximum Number", maxNumber)


const secondHeighestArray = [2, 55, 334, 120, 4, 5, 23, 3, 100, 120, 333]

var firstHeighestNumber = -Infinity
var secondHeighestNumber = -Infinity

for (var j = 0; j < secondHeighestArray.length; j++) {
    if (secondHeighestArray[j] > firstHeighestNumber) {
        secondHeighestNumber = firstHeighestNumber
        firstHeighestNumber = secondHeighestArray[j]
    }
    else if (secondHeighestArray[j] < firstHeighestNumber && secondHeighestArray[j] > secondHeighestNumber) {
        secondHeighestNumber = secondHeighestArray[j]
    }
}
console.log('second Heightst Number', secondHeighestNumber)



const LeftRightSum = [1, 2, 3, 4, 5, 1]
var leftSideSum = 0
for (var j = 0; j < LeftRightSum.length; j++) {
    var RightSideSum = 0
    leftSideSum = leftSideSum + LeftRightSum[j]
    for (var i = j; i < LeftRightSum.length; i++) {

        RightSideSum = RightSideSum + LeftRightSum[i]

    }
    if (leftSideSum == RightSideSum) {
        console.log('this is number at both side equal', LeftRightSum[j])
    }
}



const findAccurranceArray = [2, 55, 1, 4, 5, 23, 23, 3, 4]

const accurrenceObjectContain = {}


findAccurranceArray.forEach((value) => {

    if (accurrenceObjectContain[value]) {
        accurrenceObjectContain[value]++
    } else {
        accurrenceObjectContain[value] = 1
    }

})

console.log('accurrence object', accurrenceObjectContain[23])



const RemoveDuplicateArray = [2, 55, 1, 4, 5, 23, 23, 3, 4, 25, 4, 2]


const RemovedDuplicated = RemoveDuplicateArray.filter((value, index, array) => {
    return array.indexOf(value) == index
})

console.log('Removed Duplicate Number', RemovedDuplicated)


var x = 10
var y = 11
x = x + y
y = x - y
x = x - y
console.log('x value', x, 'y value', y)



var MyString = "University  madam foodoof value ejaz ollo"
MyString.split(' ').forEach((item) => {

    var MyStringArray = item.split('')
    var start = 0
    var end = MyStringArray.length - 1
    while (start < end) {
        var temp = MyStringArray[start]
        MyStringArray[start] = MyStringArray[end]
        MyStringArray[end] = temp
        start++
        end--
    }
    if (MyStringArray.join("") == item) {
        console.log('this is word which is same after reverse', item)
    }
})




const faboniciSeries = [0, 1]


function faboniciSeriesFunc(n) {

    for (var i = 0; i < n; i++) {
        faboniciSeries.push(faboniciSeries[i] + faboniciSeries[i + 1])
    }

}

faboniciSeriesFunc(5)
console.log('fabonici', faboniciSeries)


var factorial = 5
var factorialNumber = 1
for (var i = 1; i <= factorial; i++) {
    var factorialNumber = factorialNumber * i

}
console.log('factorial Number', factorialNumber)

const Sortnumbers = [9, 2, 5, 1, 7, 4, 8, 3];
const sortedNumbers = Sortnumbers.sort((a, b) => a - b);

console.log(sortedNumbers); // This will display the sorted array in the console


const SortedArray = [1, 2, 3, 4, 5, 7, 8, 9];
const foundNumber = 9;
let firstNum = 0;
let lastNum = SortedArray.length - 1;

for (var i = 0; i < SortedArray.length; i++) {
    let midnumber = Math.floor((firstNum + lastNum) / 2);
    console.log(SortedArray[midnumber]);

    if (SortedArray[midnumber] === foundNumber) {
        console.log('Number is Found:', SortedArray[midnumber]);
        break; // Once found, exit the loop
    } else if (SortedArray[midnumber] > foundNumber) {
        lastNum = midnumber - 1;
    } else {
        firstNum = midnumber + 1;
    }
}

function checkEvenLogestString(str) {
    const evenArray = str.split(" ")
    var evenLogestNumber = 0
    var evenlogestString = ''
    for (var i = 0; i < evenArray.length; i++) {
        if (evenArray[i].length % 2 == 0) {
            if (evenArray[i].length > evenLogestNumber) {
                evenLogestNumber = evenArray[i].length
                evenlogestString = evenArray[i]
            }

        }
    }
    return evenlogestString
}



const Stringggg = "yesterdayssss, i saw a dog that was hungry and thirsty asdasdfsd jamejazjam"
var Resulted = checkEvenLogestString(Stringggg.replace(',', ' '))
console.log("our Result", Resulted)



function checkParadoline(StringPassing) {
    if (StringPassing.length < 5) {
        return 'This is not greater Than'
    }
    const StringPassingArray = StringPassing.split('')

    start = 0
    end = StringPassingArray.length - 1
    while (start < end) {
        temp = StringPassingArray[start]
        StringPassingArray[start] = StringPassingArray[end]
        StringPassingArray[end] = temp
        start++
        end--
    }

    if (StringPassingArray.join('') == StringPassing) {
        return StringPassing
    }
    else {
        return "This is not Paradroin"
    }
}

const StringPassing = "foolsoof"
console.log('this is paradorim', checkParadoline(StringPassing))


const callFunc = () => {
    console.log(this)
}

callFunc()


const obj = {
    name: "Ali",
    display: function () {
        console.log(this.name);
    }
};
obj.display(); // Outputs: Ali


var string = "Welcome to this Javascript Guide!";
var stringArray = string.split(' ')

const resultArrayString = stringArray.map((value) => {
    var eactItemArray = value.split('')
    start = 0
    end = eactItemArray.length - 1
    while (start < end) {
        var temp = eactItemArray[start]
        eactItemArray[start] = eactItemArray[end]
        eactItemArray[end] = temp
        start++
        end--
    }
    return eactItemArray.join('')
})

console.log('this is resultArrayString', resultArrayString.join(' '))



var capitcalString = "Welcome to this Javascript Guide!";
var capitcalStringArray = capitcalString.split(' ')


const capitalWord = capitcalStringArray.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
})

console.log('capatical', capitalWord.join(' '))




const PrimeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

PrimeNumber.forEach((Num) => {
    if (Num <= 2) {
        console.log(' Prime', Num)
        return
    }
    var isPrime = true
    for (var i = 2; i < Num; i++) {
        if (Num % i == 0) {
            isPrime = false
        }
    }
    if (isPrime) {
        console.log(Num + ' is a prime number');
    }
    else {
        console.log(Num + ' is a Not prime number');
    }
})
var count = 0
function Repeat() {

    count += 1
    if (count <= 10) {
        console.log(count)
        Repeat()
    }

}


Repeat()
var count = 0
var timer = setInterval(() => {

    count += 1
    if (count <= 10) {
        console.log(count)
    }
    else {
        clearInterval(timer)
    }
}, 0);