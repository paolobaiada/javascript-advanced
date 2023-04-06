
function repeatHello(callback){ 
    
    let id = setInterval(() => callback(),1000);
   setTimeout(() => {
    clearInterval(id)
   }, 5000);
   }
   function hello(){
       console.log("Hello")
   }
   
   repeatHello(hello)