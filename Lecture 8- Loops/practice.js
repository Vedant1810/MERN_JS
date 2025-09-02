// let count = 10;
// let i = 0;  // initialize outside

// while (i <= count) {
//   console.log(i);
//   i++;  // increment inside
// }

// print all even numbers till 25 

let i = 0 ;
while(i <= 25){            // syntax while loop while(condition xyz){}
    if(i %2 == 0){
        console.log(i);
    }
    i++;
}


// for loops 
/* syntax 
   for( conditn 1 ; conditn 2 ; conditn 3){}
   for( let i=0 ; i<=10 ; i++)   for loop allow us to initialize inside the syntax but in while loop its not allowed

   when to use for and while loops - when we know the starting and ending condition we use for loops 
   if we know only starting condition we use while loops */

   // print squares of each number from 20 - 30

let square = 0 ;
for (let i=20 ; i<=35 ; i++){
        square = i*i;
        console.log(square);
}

// time complexity 0(16)

//table generator of 5 upto 10 
let n=5 ; 
let result = "";
for(let i = 1 ; i<=10 ; i++){
    result = n * i ;
     console.log(`${n} * ${i} = ${result}`);
}
let v = 100;
let s = v*(v+1)/2;
console.log(s);

// short circuiting 
// A&&B&&C = TRUE IF A=B=C , if even one of the three becomes false then the whole output becomed false ....
// same with || or ..if anyone becomes true whole becomes true


// git add .
// git status
// git commit -m "all lectures till 29th august"
// git push -u origin master