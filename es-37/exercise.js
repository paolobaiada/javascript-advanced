function printName(){
    let helloName = "Hello Jonh";

function inner(){
   return helloName;
             }
             return inner()
}
setTimeout(() =>{
    console.log(printName());
},1000)
 