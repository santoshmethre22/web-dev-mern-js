console.log("hello world");
//compiler and interpreter read it 

const accountId=0;
let account="ljhsdlkjfs";
var accpss="lfjsldfjl";
acc="ds"; // also correct 

let accst;// undefined

// const cant be chnage
// var dont know scope
// let dont have problem 


console.table([]);

// data types ------------------>

"use strict" 

//alert("hello");// error have diff sytax .. works in browswer

let name=" sam ";
let age=10;


//  number 
// bigInt
//string -- " " ---''
//boolean
// null --- it is value this khali that is empty
// undefined 
// symbol -- unique
// object 

console.log(typeof(name));

console.log(typeof null) // object

console.log(typeof undefined)
// console.log(typeof )

let score=44;

console.log(typeof score);// number


"33" // string
"33abc" // nan
let val=Number() // number
// Nan

// null to 0 
      
//"" 0

// 

let somnu=14;
console.log(somnu);

// premitive and non premitive


// dynamically typed language 

const scor=12.5

const islog=false;

// primitive :number string
//reference typeof  (non  premitive);
// array obj,fucntio type function 
const hero=["sam","dsjfl"]
console.log(typeof hero);
let myobj={
    name:"sam",
    age:33
}
console.log(typeof hero);
const myfucn=function(){

} // type object  functions
console.log(typeof myfucn );
// ----------------------->

// stack ---primitve --creates new copy and change ,
let one="dsas;"
let two=one;
two="oodhjdfj";
// no reference;


///-----------------------------
// heap--non primitive--original copy change if any change 

let useOne={
    name:"sam",
    age:22
}
let utwo=useOne;

utwo.name="slfjsdlf";
// changes in both 



//-----string---------------------->

const nam="sam";
const rep=44;

console.log(nam+rep+"val");
console.log(``)


const ganae=String()//object;
console.log(ganae[0]);
console.log(ganae.length);
console.log(ganae.toUpperCase());// no original value change bcz is primitive type;
console.log(ganae.charAt(2));
console.log(ganae.indexOf(n));

// methods raadha
const newst=ganae.substring(0,4)// last val exclude
const another=ganae.slice(-2,4);
console.log(ganae.trim());
console.log(ganae.replace('n','m'));


const url="dsflsfja;sfjsad";
url.includes("sm");

const my_name=santosh-sm-mm-sdflsj;
console.log(my_name.split('-'));

const hundreds=1000000;
console.log(hundreds.toLocaleString());


///  ++++++++++++++++maths+++++++++++++

console.log(Math.abs());
console.log(Math.round())
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(4.2));
console.log(Math.power(4));
console.log(Math.random()*10);// 0 to 1;


const min=10;
const max=40;
Math.random()


//+++++++++ Date ++++++++++++

//jan 1,1970  in milli second

// temporal object----->

let mydate=new Date();
console.log(mydate);




