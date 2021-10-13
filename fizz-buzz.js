const fizzBuzz = (limit) => {
  for (let i = 1; i < limit + 1; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
  }
}; 

const fizzBuzz = (limit) => {
  for (let i = 1; i < limit + 1; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz"
    if (i % 5 === 0) result += "Buzz"
    console.log(result.length > 0 ? result : i);
  }
};

fizzBuzz(15);

