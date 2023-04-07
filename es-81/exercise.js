const isLogged = true;

 function firstPromise(arg){
    return new Promise((resolve, reject) => {
        if(arg){
            resolve (Math.random())
        }
        else reject ("Is an Error")
        
    })
    
}
function secondPromise(arg){
 return new Promise((resolve, reject) => {
    if(arg > 0.5){
        resolve ({name: "John", age: 24})
    }
    else reject ("Is an error")
})

}

firstPromise(isLogged)
 .then(el => console.log(secondPromise(el)))
.catch(err => console.log(err)) 