const user = {
  id: 1,
  name: "John",
  age: 25,
};
const getEl = JSON.stringify(user);
localStorage.setItem(key, getEl)
