// Recursion is when a function calls itself for a repetitive task

// There are three things to identify when writing a recursion

// 1. Identify the recursive case (when the recursion continues)
// 2. Identify the base case (when the recursion ends)
// 3. Get closer and closer to the end goal, and return when needed. Usually you'll have two returns (one for the recursion and one for the base case)

// Here's a simple counter example

let counter = 0;

function inception() {
  console.log(counter);

  if (counter > 3) return 'done!';

  counter++;
  return inception();
}

console.log(inception());
