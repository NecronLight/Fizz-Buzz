// Prompt the user to enter the maximum number for the FizzBuzz sequence
const maxNumber = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// Iterate from 1 to the maximum number
for (let i = 1; i <= maxNumber; i++) {
  // Check if the current number is divisible by both 3 and 5
  if ((i % 15) === 0) {
    console.log("fizz buzz"); // Print "fizz buzz" if divisible by both 3 and 5
  }
  // Check if the current number is divisible by 3
  else if ((i % 3) === 0) {
    console.log("fizz"); // Print "fizz" if divisible by 3
  }
  // Check if the current number is divisible by 5
  else if ((i % 5) === 0) {
    console.log("buzz"); // Print "buzz" if divisible by 5
  }
  // If the number is not divisible by 3 or 5, print the number itself
  else {
    console.log(i);
  }
}