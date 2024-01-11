// builtin javascript methods

// functions can e defined anywhere in a script whereas methods are defined in a class.
// so methods are pre y much functions on classes and instances.

// methods can also be chained. only true for methods returning a result.

let sentence = 'hello';

console.log(
    sentence.concat('there!').
        toUpperCase().
        replace('THERE', 'you').
        concat('your amiazong!!')
);

//global methods

// global javascript methods can be used withod calling the object they were built in.

let x = 7;

console.log(Number.isNaN(x)); //false
// or we can write

console.log(isNaN(x)); //false the Number can be left out because isNan is a Global variable.

//Decoding and Encoding URis
//encoding is changing from onw shape to another.
//we wpuld be deadling with percent or url encoding

// example

let uri = "https://www.example.com/submit?name=maaike van putten"
let encoded_uri = encodeURI(uri);

console.log("encoded:", encoded_uri);

let decoded_uri = decodeURI(uri);

console.log("decoded:", decoded_uri);

// exercise 8.1

let uri1 = "How's%20it%20going%3F";
encodeURIComponent(uri1);
decodeURIComponent(uri1);

// Parsing numbers

let str_int = "7";
let int_int = parseInt(str_int);
console.log("type of ", int_int, "is", typeof int_int);

let str_float = "7.6";
let int_float = parseInt(str_float);
let float_float = parseFloat(str_float);

console.log("Type of", int_float, "is", typeof int_float); //output 7
console.log("Type of", float_float, "is", typeof float_float); //output 7

let str_binary = "0b101";
let int_binary = parseInt(str_binary);

console.log("Type of", int_binary, "is", typeof int_binary);     //output is 0

// executiing javascript with eval

// for each method
let arr = ["grapefruit", 4, "hello", 5.6, true];;

function printStuff(elmt, index) {
    console.log("printing stuff:", elmt, "on array position", index);
}
arr.forEach(printStuff);

//filtering an array

let arr1 = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element, index) {
    return typeof element === 'string';
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

//every 

console.log(arr.every(checkString));

//copyWithin

let arr2 = ["grapefruit", 4, "hello", 5.6, true, false];
arr2.copyWithin(0, 3, 4);

//map method

let arr3 = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);

//l lastIndexOf

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

//practice 8.2

let origArr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Larry"];
const alterArr = origArr.filter((value, index, array) => {
    console.log(value, index, array.indexOf(value));
    return array.indexOf(value) === index;

})
console.log(alterArr);

// practice 8.3
let arrNumbers = [1, 2, 3, 4, 5, 6]
console.log(arrNumbers.map(numb => numb * 2));

//using anonymous function
const anoArr = arrNumbers.map(
    function (numb) {
        return numb * 2;
    })

//string methods

//concat str1, str2 == str1.concat(str2);

//split converting string to arrays. It is important to note that the split takes in different parameters depending on what seperates your string. could be numbers colons semicolons spaces commas just to name a few.

let result = "hello world"
let arr_result = result.split(" ");
console.log(arr_result); //[ 'Hello', 'JavaScript' ]

// converting arrays to string ***join*

let letters = ['a', 'b', 'c'];
let z = letters.join()
console.log(x); //a,b,c. 
//if you do not want commas you can specify in the join method

console.log(letters.join('-')); //a-b-c

// index of
let poem = "Roses are red, violets are blue, if I can do JS, then you"
let index_re = poem.indexOf("re");
console.log(index_re); //7
let indexNotFound = poem.indexOf("python");
console.log(indexNotFound); //-1 because it didint find python in the string.

// search also does the smae thing as indexOf
// search accepts regext format as input whereas indesOf accepts strings.

//charAt(index);

let pos1 = poem.charAt(10);
console.log(pos1); //r

// charAt is ued to looking for characters at specific index positions. that the revers of search and indexOf

// asking for the position of a string that is out of range woudl return an emoty string 

//slice(start, end) creates sub strings

let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3); console.log("1:", substr1);
console.log("2:", substr2); //1: e a substring 2: Cre

//replace(old, new) to replace part of a string
//toUpperCase toLowerCase
// startWith(param) and endWith(param)

//practice 8.4
let mixedStr = "thIs will be capiTalized for each word";

function capitalized(str) {
    let lower = str.toLowerCase();
    let arr = [];
    let lowerSplit = lower.split(' ');
    lowerSplit.forEach(elmt => {
        restStr = elmt.slice(1);
        firstLetter = elmt.slice(0, 1).toUpperCase();
        arr.push(firstLetter.concat(restStr));

    })

    return arr.join(" ");
}
console.log(capitalized(mixedStr));

// practice 8.5
// let val = 'I love JavaScript'
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
// console.log(letter);
// val = val.replaceAll(letter,index);
// });
// console.log(val);

//number methods

//isNaN shecking if somthing is a number
//checking if somthing is finite
//isFinite(param) is a global ariable. It returns false for NaN , Infinity , and undefined , and
//true for all other values:

//is a local variable hence need to refer to NUmber.isIntrger(param)
let x1 = 3;
let str2 = "integer";
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));

// param.toFixed(#decimal) this is used to specify the number of decimal places we want a number to have

//param.toPrecision(#prescision);

//math methods

//Math.max(), Math.min(), Math.sqrt(), Math.pow(base, exponent),  Math.round(number to round either up or down) Math.ceil(number) the ceil round up everything 1.1 = 2 with ceil Math.floor() rounds down only Math.trunc does the xact same thing as floor.

//practice8.6
console.log(Math.PI);
console.log('ceil value:', Math.ceil(5, 7), 'floor value:', Math.floor(5.7), 'round value', Math.round(5.7))

console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
let number1 = (Math.random() * 100) + 1;
number1 = Math.floor(number1);

//date methods
let currentDateTime = new Date();
console.log(currentDateTime)

// in the above we are using  constructor. there is a built in method now() that returns the date and the time.

let now = Date.now();
console.log(now);

let stringDate = new Date('sat jan 11 2024 14:27 GMT+01')
console.log(stringDate);
let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

// Methods to get and set the elements of a date

let d = new Date();
console.log('day of the week:', d.getDay());
console.log('day of the month:', d.getDate());
console.log('month:', d.getMonth());
console.log('year:', d.getFullYear());
console.log(':seconds', d.getSeconds());
console.log('miliseconds:', d.getMilliseconds());
console.log('time:', d.getTime());

// //practice 8.7
let d1 = new Date(2023, 12, 12);

console.log(d1);

const months = ["January", "February", "March", "April", "May", "June", "jully", "august", "septemtber", "october", "november", "december", "mel"];
let day = d1.getDate();
let month = d1.getMonth();
console.log(month)
let year = d1.getFullYear();
let mydate = `${months[month - 1]} ${day} ${year}`;

console.log(mydate);
//Practice exercise 8.7
// let future = new Date(2025, 5, 15);
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June", "jully", "august", "septemtber", "october", "november", "december"]
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);

// chapter projects

let word = "JavaScript";
function scramble(str) {
    let strLen = str.length;
    let temp = "";
    for (let i = 0; i < strLen; i++) {
        console.log(str.length);
        let index = Math.floor(Math.random() * str.length);
        temp += str[index];
        console.log(temp);
        str = str.substr(0, index) + str.substr(index + 1);
        console.log(str);
    }
    return temp;
}
console.log(scramble(word));