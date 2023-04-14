const user = {
  id: 1,
  name: "John",
  age: 25,
};


const person = JSON.stringify(user);
localStorage.setItem("key",person) 

   console.log(JSON.parse(localStorage.getItem("key"))) 

