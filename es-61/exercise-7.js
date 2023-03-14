class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
 get getValue(){
    return [this.firstName,this.lastName,this.age]

  }
  set getValue(value){
    this.firstName = value;
    this.lastName = value;
    
    
  } 
  get fullName(){
      return [this.firstName,this.lastName,this.age]
  }
  set fullName(value){
    this.firstName = value;
    this.lastName = value
  
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
