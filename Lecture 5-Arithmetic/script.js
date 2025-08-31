console.log("hello world");
const number = 234;
let val = number/100;
console.log(Math.floor(val));

// to elminate digit we use / divide operator
// to extract/print digit we use modulus % operator
// = is called assignment operator
// === equal to or comaprison operator

/* some weird behaviours of arithmetic operators*/
// multiply - except addtion opeartor all other oprators converts string into number 
const num = "123";
const str = "abc";
let result;

result = num *2; // takes 12 as a int and multiplies
console.log(result);

result=str*2;   // will give error NaN
console.log(result);

// addtion -- in addtion , it prefers the string 
result = num +2;
console.log(result); // 1232 just adds the 2 

// weird behave in case of decimal addtion 

result = 0.1 + 0.2 ; // 0.1 - convert decimal to binary store as a binary 001010 
console.log(result);

// modulus of a negative number

result = -31%7;
console.log(result);


// power method 

result = Math.pow (2,5); //works like 2**5
console.log(result);

// precedence and associativity next class

// some more arithmetic operators 
 let r = 5 ; 
 r += 5 ;            // r = r+5 
 console.log(r);

 // console.log(age)
// let age = 20 ; // gives error cannot access before initialization

/* console.log(age); gives error not defined */


