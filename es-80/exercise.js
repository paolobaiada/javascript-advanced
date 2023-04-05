const number = 15;
 const compare = new Promise((resolve, reject) => {
    if(number > 10){
        return resolve("Is greatest")
    }
    else return reject("Is small")
})

compare.then(element => console.log(element))
compare.catch(err => console.log(err))