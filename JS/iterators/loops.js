//for is same as c++

let myarr=[22,55,66663,326,767,24]


//break and continue;

// while loop


// array speicfic loop
// for of 
const arr=[214,335,64,65,6434,4,6746,454]

for (const element of arr) {
    console.log(element)
}

const greetings="hello world"
for (const element of greetings) {
    
}

// maps are objects

const map=new Map();
map.set("in","india");
map.set("use","united state of sdlfjas");
// unique and inorder of insertion

for (const element of map) {

    // here element is [] of key and value
    const [key,value]=element;
}

const obj={
    game:"sdlfasj",
    game2:"dlfjlk"
}

// object have diff way to iteratable 
for (const element of obj) {
    // not iteratobale to object 
}

const myobj={
    name:"dfsj",
    cpp:"dlfjs",
    c:"dkfjl"
}


// obj can be iterated  from forin
for (const key in myobj) {
    if (!Object.hasOwn(object, key)) continue;
    // u can get key from the iteration 
    const element = myobj[key];  
}
const programing=["dfs",2,4,54,6,6,33]

// for in gets only keys in array get indexs

for (const key in programing) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
}
// for in loop cant iterate on map----->


// for each loop 

const fore=[24,3,5,6,2,7,4]

fore.forEach(function (item){
    console.log(item);
})

fore.forEach((item)=>{
        console.log(item);

})

function printMe(item){
    console.log(item);
}

fore.forEach(printMe); 

fore.forEach((item,index,arr)=>{
    console.log(item,index,item);
})
const mycode=[{
    LANG:"dfsfl;",
    ldf:"lksdfjsl",
    kfjs:"dsjfei"
},{
    sdlkfjasl:"ldsfkj",
    dslfkjs:"dioewijf"
}]

mycode.forEach((object)=>{

});

// dont return anything 
mycode.forEach((object)=>{

});

// to return 

const mynum=[3,36,32,664,66];
const newnums=mynum.filter((num)=>{
    return num>4
})

// map------>

const newn=mynum.map((nums)=>{
    return nums+10;
})
console.log(newn);


// chaining-------->
const neweje=mynum.map((item)=>{
    return item*10
}).map((item)=>{
    return item+1;
}).filter()

// reduce methods
mynum.reduce((accumulator,currentValue)=>{

})



// Without Initial Value
// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((acc, curr) => acc + curr);

// console.log(sum); // 10

// 👉 Here:

// acc starts from first element (1)
// curr starts from second element (2)
// 🔹 Real Use Cases
// 1. Find Maximum
let arrrr = [10, 5, 20, 8];

let max = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, arr[0]);

console.log(max); // 20
// 2. Count Frequency
let fruits = ["apple", "banana", "apple", "orange"];

let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);
// // { apple: 2, banana: 1, orange: 1 }
// 3. Flatten Array
// let arr = [[1, 2], [3, 4], [5]];

let flat = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1, 2, 3, 4, 5]
// 🔹 Key Points

// ✔ Works left → right
// ✔ Does not modify original array
// ✔ Very useful for transformations
// ✔ Can replace map, filter, etc. (advanced use)
myarr.reduce(function(acc,currval){
    return acc+currval;
},0)











