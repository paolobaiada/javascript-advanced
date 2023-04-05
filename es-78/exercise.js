function repeatHello(callback){ 
    
 setInterval(() => console.log(callback),1000);

}
function hello(){
    return "Hello"
}

repeatHello(hello())