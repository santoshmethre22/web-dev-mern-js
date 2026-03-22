let myDate=new Date();

console.log(myDate);
console.log("\n")
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
// 2026-03-20T11:44:14.799Z
// Fri Mar 20 2026 17:14:14 GMT+0530 (India Standard Time)       
// Fri Mar 20 2026
// 2026-03-20T11:44:14.799Z
// 2026-03-20T11:44:14.799Z
// 3/20/2026
console
console.log(typeof(myDate))// object;

let newDate=new Date(2026,2,20)// starts from 0
console.log(newDate.toDateString())

console.log("happy birth day");

console.log("");

let myCreat=new Date("2026-03-20")// here month starts from 1;
console.log(myCreat.toLocaleDateString())
console.log(myCreat.toDateString())


let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(myCreat.getTime());
console.log(Date());
console.log(Date.now()/1000);

let newDa= new Date();
console.log(newDa.getDate());
console.log(newDa.getMonth());
console.log(newDa.getDay());


newDa.toLocaleString("default",{
    weekday:"long"
})