/* Conditions */
 // logical operators ( also called comparison)
 // x==y  ; x<=y  ; x>=y ; x<y ; x>y
 // all logical ooperators returns true / false

 let num = 24 ;
 let num2 = num/2 ; 
 if (num2%2==0){
    console.log("is even");
 }else{
    console.log("is not even");
 }

 /* note - >= , <= , ==  (this operators only checks value)

 >== , <== , ===  (this checks both value and data types) */

 // == vs ===
 let a = "12";
 const b = 12 ;
 let d = 12 ;

 if(a==b){
    console.log("both a and b has same vblaue");
 }

 if(b===d){
    console.log("both b and d has same value and data type");
 }
  if (d===a){
    console.log("both  d and a has same value and data type");

  }
  // grading system - checks the score of a student and gives the grade according to conditions 
  // can use nested if else ( else if )
//   const prompt = require("prompt-sync")();
//   let age = prompt("enter your age ");
//   let Age = Number(age);
//   let gender = prompt("enter your gender");
//   if(Age>=18 && gender=="male"){
//     console.log("mature boy");
//   }else if (Age>=18 && gender=="female"){
//     console.log("mature girl");
//   }

  num = 242 ; 
  first_digit = Math.floor(num/100);
  last_digit = num%10 ; 
  if (first_digit == last_digit){
     console.log("palindrome");
  }else{
   console.log("not a palindrome");
  }

  // check if a number is decimal or integer

  num = 12 ;// math.floor(num) == num then integer
  /* if (Number.isInteger(num)) {
  console.log("It is an integer");
} else {
  console.log("It is a decimal");
} */
  let num5 = 12.5 ; // if num5%1 ==0 then integer else decimal coz int divide by 1 will have no remiander but decimal will 
  // ceil of 11 is 11 and ciel of 11.0 is 12

  let v = 10 ; 
  let x = 12;
  let z = Math.max(10 , 12);
  console.log(z);