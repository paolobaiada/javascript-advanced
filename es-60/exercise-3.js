class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
  }
  static fromObject(obj){
   let one = new Person("Mario","Rossi");
   return one;
  }
}

 const obj = {
  firstName: "Mario",
  lastName: "Rossi",
}; 

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
