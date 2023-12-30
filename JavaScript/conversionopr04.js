let score = "33"
console.log(typeof score)
console.log(typeof (score)) //both are same, any thing can be used

//lets see how to convert them
val=Number(score)
console.log(typeof val); //convert

//lets see a worst case scenrio  where sctually there were some alphabets in string and we convert it

test="23dhd"
console.log(typeof test)
value=Number(test)
console.log(typeof value); //showing type as number, but actually NaN(not a numer)
console.log(value) //we must checking to avoid such errors/issues

// if Null-value 0
//if undefined-value nan
//for bool, true=1, false=0
//for any strings etc. nan
let x             //for empty wheather number string false, else always true
let y=Boolean(x)
console.log(y);


