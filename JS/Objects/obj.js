//singleton

Object.create


// object literals 
const mysym=Symbol("key");
const jsu={
    name:"sam",
    age:18,
    location:"slasdl",
    "sdj":"dlkfsj",
    [mysym]:"key1"
}

console.log(jsu.name);
console.log(jsu["name"]);
console.log(jsu["sdj"])


Object.freeze(jsu);

jsu.greting=function(){
    console.log("hello");
}
jsu.gre2=function(){

    console.log(`this is name ${this.name}`)

}
console.log(jsu.greting);// returns functions referance 
console.log(jsu.greting());



console.log(jsu.greting);// returns functions referance 
console.log(jsu.greting());



