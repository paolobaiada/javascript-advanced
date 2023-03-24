function sum( ...otherNumber) {
 let sum = 0;
 for (const number of otherNumber) {
    sum += number;
 }
 return sum
}

console.log(sum(1, 2, 3, 4, 5,));
