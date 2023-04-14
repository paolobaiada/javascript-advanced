const user = {
  id: 1,
  name: "John",
  age: 25,
};



/* const el = JSON.parse(local);
console.log(el) */
if (typeof window !== 'undefined'){
  console.log(JSON.parse(localStorage.getItem("key")))
}
