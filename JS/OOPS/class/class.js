//js is prototype  based languge

// oops
// object

// why use oop

//  parts of oop

// object literal

// constructor functions

// instance(new,this)

// 4 pillers
//abstraction
//encapsulation
//inheritance
// polymorphism

const username="slkjf"

const user = {
  username: "sam",
  logi: 4,
  singI: true,
  getUser: function () {
    console.log("-----");
    
    console.log(username);
    console.log("elkjwslk",this.username);

    console.log(this)
},

};

console.log(user.getUser());


const promiseOne=new Promise();
const date =new Date();





