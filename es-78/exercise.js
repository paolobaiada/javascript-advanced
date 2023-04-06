function repeatHello(callback){ 
    
 setInterval(() => callback(),1000);

}
function hello(){
    console.log("Hello")
}

repeatHello(hello)