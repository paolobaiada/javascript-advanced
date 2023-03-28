class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
  fromJson(json){
    return json;
  }
}

 const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = JSON.parse(json);
console.log(developer);  
