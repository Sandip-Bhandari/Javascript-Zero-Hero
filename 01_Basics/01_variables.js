const accountId =  144553
let accountEmail = "XYZ@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2  // not allowed

accountEmail = "ABC@gmail.com"
accountPassword = "123"
accountCity = "West Bengal"

/*
Prefer not to use var
becuase of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])