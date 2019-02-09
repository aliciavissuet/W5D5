const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    completionCallback(sum)
    reader.close();
  } else {
    reader.question("What is your number?", function (answer) {
      const ans = parseInt(answer);
      sum += ans;
      console.log(`Sum is ${sum}!`);
      addNumbers(sum, numsLeft - 1, completionCallback); 
    });
  } 
};


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
