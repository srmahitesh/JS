const Id=4656
let Email="kashyaphitesh456@gmail.com"
var PassWord="Hitesh@123"  //avoid using var because there is problem of scopes
City="Hamirpur"

// console.log(Id);    //const declares variables are never changes
// Id=897

console.log(Id);
console.log(Email);
console.log(PassWord);
console.log(City);   //avoid printing like, lets see new method of printing multiple variables
//lets see what happen if variable is not initialised a value
let h;

console.table([Id, Email, PassWord,City, h])
