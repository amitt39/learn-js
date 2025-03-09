const accId = 638
let accEmail = "amitsonagra@gmail.com"
var accCity = "Ahmedabad" //Prefer not use var because of issue in block scope and functional scope

accEmail = "25amitsonagra@gmail.com"

// accId = 749 not allowed --> const cannot be changed

// console.log(accId);
// console.log(accEmail);
// console.log(accCity);

console.table([accId, accEmail, accCity]);