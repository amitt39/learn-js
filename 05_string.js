// const name = "Amit"
// const age = 21

// console.log(name + age + " value");

// console.log(`Hello My name is ${name} and my age is ${age}.`);

const lastName = new String('Amit Sonagra ')// check this on console

// // console.log(lastName[3]); // Access key value pair from of string
// // console.log(lastName.__proto__);

// console.log(lastName.length);
// // console.log(lastName.toUpperCase());
// // console.log(lastName.charAt(0));
// console.log(lastName.indexOf('s')); // If char is not found then it returns -1.

// const newString = lastName.substring(0, 4) //Here in (0, 4) => 4th char will not include => inshort it counts from 0
// console.log(newString);

// const anotherString = lastName.slice(-7, 2)
// console.log(anotherString);

// const newStringOne = "   Amit    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // Trims the whitespace

// const url = "https://amit.com/amit%20sonagra"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('amittt'))

// console.log(lastName.split(' '));

const newString = lastName.at(2)
console.log(newString);
