
 /*  const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }; */
  function a(...rest){
   
     /* const personInfo = {
      firstName: person.firstName,
      lastName: person.lastName,
      age: person.age
    };  */
    return rest;
  }
 
  



console.log(a(1,"Mario","Rossi",25));