//
function saymy(){



}
saymy// reference;
saymy();//execution

function add2number(number1,number2)
{
    number1+number1;
}

function add(num1,num2){
    let result=num1+num2;
    return result;
}

const res=add(1,2);

function login(usernam){
    return `${user} just logged in`
}

console.log(login("santosh"))
// if no value passed in the paramerter then undefind will come 


function cal(val1,val2,...num1){// rest operator
    return num1;// return array;
}
cal(2,3,5,56,664,643);
// val1=2,val2=3;

const user={
    username:"sama",
    price:124
}

function handle(anyobject){
    
    anyobject.username
    anyobject.price;
}

const marrr=[2314,454,64556,56,33];

function retu(){
     
}


// global scope
{
    // block scope
}

function one(){
    function two(){
        const websit="jdkls";
        console.log()
    }
}



// ++++++ ++++

addon(5)// can be executed here 


function addon(value){
    return value+1;
}

// cnt access here addtwo(4);
const addtwo= function(numbe){
    return numbe+3;
}
addtwo(4);

