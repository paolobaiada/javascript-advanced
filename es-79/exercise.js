
function repeatHello(callback){ 
    
    let id = setInterval(() => console.log(callback),1000);
   setTimeout(() => {
    clearInterval(id)
   }, 5000);
   }
   function hello(){
       return "Hello"
   }
   
   repeatHello(hello())