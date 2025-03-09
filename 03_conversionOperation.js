//                            ************ Conversions ************

// let score = "100"
// let score = "100abc"
// let score = null
// let score = undefined
// let score = true

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score) // Give value in number
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //if number change into string then value will be given as "NaN". NaN => Not a Number

// typeof NaN is number.
// True => 1, Flase => 0.

// let isLoggedIn = 1 //True
// let isLoggedIn = "" //False
// let isLoggedIn = "Amit" //True

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// let isString = 33

// let stringNumber = String(isString)

// console.log(typeof stringNumber)


//                            ************ Operations ************

// let value = 3

// let negValue = -value

// console.log(negValue)

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)//Power
// console.log(2/3)
// console.log(2%3)

// let str1 = "Hello"
// let str2 = " Amit"

// let str3 = str1 + str2

// console.log(str3)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1" + 2 + 2) //If string is first then it will not add, output will be => 122.
// console.log(1 + 2 + "2") //If string is last then it will first add, output will be => 32.

// console.log(true)
// console.log(+true)
// console.log(true+) // Will give error
// console.log(+"")

let gameCounter = 100
// gameCounter++
++gameCounter
console.log(gameCounter)
