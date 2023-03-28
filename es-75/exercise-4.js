const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person, ["id","age"]);

console.log(JSON.parse(json)); // Should return: { id: 1, age: 25 }