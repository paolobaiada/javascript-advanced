function printAsyncName(callback,str){
setTimeout(() => {
   console.log(callback)
}, 1000);
setTimeout(() => {
    console.log(str)
}, 2000);
}

function hello(){
   return "Hello"
}

printAsyncName(hello(),"Jonh")