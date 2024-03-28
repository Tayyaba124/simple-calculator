#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message:"Select one of the operator to perform action",
    type:"list",
    name:"operators",
    choices:["Addition","subtraction","Multiplication","division"],
  }
]);
console.log(answer);

//conditional statment
if (answer.operators === "Addition"){
  console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operators === "subtraction"){
  console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operators === "Multiplication"){
  console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operators === "division"){
  console.log(answer.firstNumber / answer.SecondNumber);
}
