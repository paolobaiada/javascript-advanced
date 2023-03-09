const sumUntil = (maxValue) => {
  let i;
  let sum = 0;
  for(i = 0; i <= maxValue; i++)
  {
    sum = sum + i;
     
  }
  console.log(sum);
}

sumUntil(5);