const myarr=[0,1,2,3,true,"sam"];

console.log(myarr[2])

// array methods
myarr.push(6);
myarr.push(7);

myarr.pop()
console.log(myarr);

myarr.unshift(0);
// insert at start;
myarr.shift();
// remove from start;

console.log(myarr.includes(9));
console.log(myarr(9));

// slice ,splice
console.log("A",myarr)
myarr.slice(1,3)// last not included;array dont change;
console.log("B",myarr);

myarr.splice(1,3) //last included and array change

let newarr=[1,2,3,4];

let contarr=myarr.concat(newarr);// return new array
//---- spred operator;

let all_new=[...myarr,...newarr];


let ano_arr=[1,3,5,[3,5,6,],[8,56,2,34]];
const real_ano=ano_arr.flat(Infinity);

Array.isArray("sam");
Array.from("sam");
Array.from({name:"santosh"})// imp; // doesnt works well

//✅ 1. If you want an array of characters from the string
Array.from("santosh");
// ["s", "a", "n", "t", "o", "s", "h"]
//✅ 2. If you want key-value pairs from the object
Array.from(Object.entries({ name: "santosh" }));
// [["name", "santosh"]]
//✅ 3. If you just want values
Array.from(Object.values({ name: "santosh" }));
// ["santosh"]
//✅ 4. If you meant to create an array with length
Array.from({ length: 1 }, () => "santosh");
// ["santosh"]

let score=100;
let score1=193;
let score2=1234;

console.log(Array.of(score,score1,score2));



