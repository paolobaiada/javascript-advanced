const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
for(const value in person){
  console.log(value + ":" + person[value])
}
