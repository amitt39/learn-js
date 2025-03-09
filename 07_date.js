// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2004, 10, 25, 18, 35, 58)
let myCreatedDate = new Date("2025-11-25")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is ${myDate.toLocaleTimeString()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})

