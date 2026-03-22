// singleton

const tinder=new Object();



//non sinleton
const t={};

tinder.id="21241";
tinder.name="sam";

const reg={

    fullName:{
        name:"sam",
        last:"meht"
    }
}


const obj1={
    1:"a",
    2:"b"
}
const obj12={
    12:"a",
    22:"b"
}

//const obj3={obj1,obj12}

const obj3=Object.assign(obj1,obj12);
const obj4=Object.assign({},obj1,obj12);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

const obj5={...obj1,...obj12}

console.log(Object.keys(tinder));// return array of keys
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


console.log
(tinder.hasOwnProperty("name"))

const course={
    coursename:"djas;f",
    courseints:"dslkfjs",
    price:"dfls",
}
// course.courseinsts
const {courseints:inst}=course









