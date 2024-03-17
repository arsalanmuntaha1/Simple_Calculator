import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", name: "firstNumber", type: "number" },
    { message: "Enter second number", name: "secondNumber", type: "number" },
    {
        message: "select one of the operator from operation",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage"],
    },
]);
// console.log(`firstvalue: ${answer.firstNumber}, secondvalue: ${answer.secondNumber},operator:${answer.operator}`)
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(answer.firstNumber / answer.secondNumber * 100);
}
else
    console.log("Please enter valid operator");
