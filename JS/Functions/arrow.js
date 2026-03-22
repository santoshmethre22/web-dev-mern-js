//
const user={


    name:"sam",
    price:333,
    welcome:function(){
        console.log(this.name);
        console.log(this)
    }
    
}
// this current context;

console.log(this)//{} refers to { } in node but in chrome refers to window object as the global object is window object 

function chai(){
    console.log("chai");
    console.log(this)// not works 
}
chai();

const chh=()=>{
    let user="sam"
    console.log(this) //not works undefind

}

// arrow function
()=>{

}


const addt=(num1,num2)=>  num1+num2;
// curly braces the have to return keyword

//iffy

(function ldfjs(){

})();

// ((name)=>{
// })(name);









