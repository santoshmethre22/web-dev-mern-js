// // opration to be completed 
// // future m jaake complete hoga

// fetch(
//     "dsfjldfs"
// ).then().catch().finally();


// const promiseOne=new Promise(function(resolve,reject){
//     // async task
//     // db call cry
//     setTimeout(function(){
//         console.log("jslfj")
//     },1000)

//     resolve();// connect to the then 
    

// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => 

        
//    { console.log("hello task2")
//     resolve()}
    
//     , (1000));
    
// }).then(function(){
//     console.log("async 2 resolve")
// })



// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({name:"sam",sdlfj:"sdlfkjsdfl"})
//     }, 1000);
// })


// promiseThree.then(function(user){
//     console.log(user);
// })


const proFour=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject("error somthing went wrong")
        }
    },1000)

})

proFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log("username ",username)
}).catch(function(error){
    console.log(error);
})
.finally(()=>
console.log("the promise finally resolved "))

// have you need it before adding 


const proFive=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject("error somthing went wrong")
        }
    },1000)

})


async function cosumefive() {
    // directly errors ko handle nahi kar sakte 
  // to hanle wrap in try catch block
  try {
      const response= await proFive;
      console.log("async --->")
      console.log(response);
  } catch (error) {
    console.log(error)
  }
}
cosumefive();

async function getalluser(params) { 
    try {
        const res=await fetch("https://api.github.com/users/santoshmethre22")
        
        const data=await res.json()
        console.log(data);
    
    } catch (error) {
        console.log(error);
    }
}

//getalluser()

fetch("https://api.github.com/users/santoshmethre22")
.then((res)=>{
    
    return res.json();
})
.then((data)=>(console.log(data)))
.catch((error)=>console.log(error));












