/* Print first 10 odd numbers from 1 to 200 that are divisible by 5 --> use ?*/
let count = 0 ;
for(let i =1 ; i<=200 ; i++){
    if((i%2!==0) && (i%5==0)){
        console.log(i);
        count +=1 ;
    } if(count>10){
        break ;
    }
}

/*

## STRINGS 

| Method                | Purpose                   | Example                     | Output        |
| --------------------- | ------------------------- | --------------------------- | ------------- |
| `.split(sep)`         | Split into array          | `"hi js".split(" ")`        | `["hi","js"]` |
| `.join(sep)`          | Array → String            | `["a","b"].join("-")`       | `"a-b"`       |
| `.toUpperCase()`      | Uppercase                 | `"hello".toUpperCase()`     | `"HELLO"`     |
| `.toLowerCase()`      | Lowercase                 | `"HELLO".toLowerCase()`     | `"hello"`     |
| `.trim()`             | Remove spaces             | `" hi ".trim()`             | `"hi"`        |
| `.includes(x)`        | Check substring           | `"js".includes("s")`        | `true`        |
| `.startsWith(x)`      | Prefix check              | `"abc".startsWith("a")`     | `true`        |
| `.endsWith(x)`        | Suffix check              | `"abc".endsWith("c")`       | `true`        |
| `.replace(a,b)`       | Replace first             | `"aba".replace("a","x")`    | `"xba"`       |
| `.replaceAll(a,b)`    | Replace all               | `"aba".replaceAll("a","x")` | `"xbx"`       |
| `.substring(i,j)`     | Slice part                | `"abcdef".substring(1,4)`   | `"bcd"`       |
| `.slice(i,j)`         | Slice part (negatives ok) | `"abcdef".slice(-3)`        | `"def"`       |
| `.charAt(i)`          | Char at index             | `"abc".charAt(1)`           | `"b"`         |
| `.charCodeAt(i)`      | Unicode                   | `"A".charCodeAt(0)`         | `65`          |
| `.repeat(n)`          | Repeat string             | `"ab".repeat(3)`            | `"ababab"`    |
| `.padStart(len, pad)` | Left pad                  | `"5".padStart(3,"0")`       | `"005"`       |
| `.padEnd(len, pad)`   | Right pad                 | `"5".padEnd(3,"0")`         | `"500"`       |

## ARRAYS

| Method              | Purpose        | Example                            | Output      |
| ------------------- | -------------- | ---------------------------------- | ----------- |
| `.push(x)`          | Add end        | `[1,2].push(3)`                    | `[1,2,3]`   |
| `.pop()`            | Remove end     | `[1,2,3].pop()`                    | `[1,2]`     |
| `.shift()`          | Remove start   | `[1,2,3].shift()`                  | `[2,3]`     |
| `.unshift(x)`       | Add start      | `[2,3].unshift(1)`                 | `[1,2,3]`   |
| `.map(fn)`          | Transform      | `[1,2,3].map(x=>x*2)`              | `[2,4,6]`   |
| `.filter(fn)`       | Keep matching  | `[1,2,3].filter(x=>x>1)`           | `[2,3]`     |
| `.reduce(fn, init)` | Accumulate     | `[1,2,3].reduce((a,b)=>a+b,0)`     | `6`         |
| `.forEach(fn)`      | Loop           | `[1,2].forEach(x=>console.log(x))` | `1 \n 2`    |
| `.find(fn)`         | First match    | `[4,9,16].find(x=>x>10)`           | `16`        |
| `.findIndex(fn)`    | Index of match | `[4,9,16].findIndex(x=>x>10)`      | `2`         |
| `.some(fn)`         | Any true?      | `[1,2,3].some(x=>x>2)`             | `true`      |
| `.every(fn)`        | All true?      | `[1,2,3].every(x=>x>0)`            | `true`      |
| `.includes(x)`      | Contains?      | `[1,2,3].includes(2)`              | `true`      |
| `.indexOf(x)`       | First index    | `[1,2,3,2].indexOf(2)`             | `1`         |
| `.lastIndexOf(x)`   | Last index     | `[1,2,3,2].lastIndexOf(2)`         | `3`         |
| `.concat(arr)`      | Merge arrays   | `[1,2].concat([3,4])`              | `[1,2,3,4]` |
| `.slice(i,j)`       | Copy part      | `[1,2,3,4].slice(1,3)`             | `[2,3]`     |
| `.splice(i,n,...)`  | Cut/insert     | `arr=[1,2,3]; arr.splice(1,1,"x")` | `["x",3]`   |
| `.sort(fn)`         | Sort           | `[3,1,2].sort((a,b)=>a-b)`         | `[1,2,3]`   |
| `.reverse()`        | Reverse        | `[1,2,3].reverse()`                | `[3,2,1]`   |
| `.flat(depth)`      | Flatten array  | `[1,[2,[3]]].flat(2)`              | `[1,2,3]`   |
| `.flatMap(fn)`      | Map + flat     | `[1,2].flatMap(x=>[x,x*2])`        | `[1,2,2,4]` |
| `.join(sep)`        | To string      | `[1,2,3].join("-")`                | `"1-2-3"`   |

## OBJECTS

| Method                      | Purpose           | Example                         | Output       |
| --------------------------- | ----------------- | ------------------------------- | ------------ |
| `Object.keys(obj)`          | Keys array        | `Object.keys({a:1,b:2})`        | `["a","b"]`  |
| `Object.values(obj)`        | Values array      | `Object.values({a:1,b:2})`      | `[1,2]`      |
| `Object.entries(obj)`       | `[key,val]` pairs | `Object.entries({a:1})`         | `[["a",1]]`  |
| `Object.assign(target,src)` | Merge objects     | `Object.assign({a:1},{b:2})`    | `{a:1,b:2}`  |
| `Object.fromEntries(arr)`   | Array → Object    | `Object.fromEntries([["a",1]])` | `{a:1}`      |
| `Object.freeze(obj)`        | Make immutable    | `Object.freeze({a:1})`          | Can’t change |
| `Object.hasOwn(obj, key)`   | Key exists?       | `Object.hasOwn({a:1},"a")`      | `true`       |

## Math

| Method             | Purpose         | Example           | Output    |
| ------------------ | --------------- | ----------------- | --------- |
| `Math.floor(x)`    | Round down      | `Math.floor(4.9)` | `4`       |
| `Math.ceil(x)`     | Round up        | `Math.ceil(4.1)`  | `5`       |
| `Math.round(x)`    | Nearest int     | `Math.round(4.5)` | `5`       |
| `Math.trunc(x)`    | Remove decimals | `Math.trunc(4.7)` | `4`       |
| `Math.max(...arr)` | Largest         | `Math.max(1,9,3)` | `9`       |
| `Math.min(...arr)` | Smallest        | `Math.min(1,9,3)` | `1`       |
| `Math.pow(a,b)`    | Power           | `Math.pow(2,3)`   | `8`       |
| `Math.sqrt(x)`     | Square root     | `Math.sqrt(16)`   | `4`       |
| `Math.abs(x)`      | Absolute        | `Math.abs(-7)`    | `7`       |
| `Math.random()`    | Random 0-1      | `Math.random()`   | `0.37...` |
| `Math.sign(x)`     | Sign (-1/0/1)   | `Math.sign(-5)`   | `-1`      |


## NUMBERS 

| Function          | Purpose           | Example              | Output  |
| ----------------- | ----------------- | -------------------- | ------- |
| `parseInt(str)`   | String → int      | `parseInt("42")`     | `42`    |
| `parseFloat(str)` | String → float    | `parseFloat("3.14")` | `3.14`  |
| `Number(str)`     | Convert to number | `Number("5")`        | `5`     |
| `isNaN(val)`      | Not a number?     | `isNaN("abc")`       | `true`  |
| `isFinite(val)`   | Finite check      | `isFinite(1/0)`      | `false` |


## OTHER USEFUL ONES

| Function           | Purpose         | Example                                     | Output          |
| ------------------ | --------------- | ------------------------------------------- | --------------- |
| `Array.isArray(x)` | Is array?       | `Array.isArray([1])`                        | `true`          |
| `new Set(arr)`     | Unique values   | `[...new Set([1,1,2])]`                     | `[1,2]`         |
| `new Map()`        | Key-value store | `let m=new Map(); m.set("a",1); m.get("a")` | `1`             |
| `Date.now()`       | Timestamp (ms)  | `Date.now()`                                | `1693702930000` |

*/
