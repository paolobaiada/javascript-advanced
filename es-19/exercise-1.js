const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};



// Modify the property `firstName` of the `person2` in "Simon".

const person2 = {};
for(const value in person1){
  person2[value] = person1[value];
}
person2.firstName = "Simon"

console.log(person1);
console.log(person2);
