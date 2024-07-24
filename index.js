#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1248;
// for pin code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin number");
    // select options
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    // console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        // enter amount
        let amountAns = await inquirer.prompt([
            // {
            //     name: "amount",
            //     message: "select amount",
            //     type: "list",
            //     choices: [1000,2000,2500,3500]
            // }
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // console.log(amountAns.amount);
        // myBalance -= amountAns.amount;
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
        }
        else {
            console.log("you don't have a balance");
        }
        // console.log("your remaining balance is: " + myBalance)
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        // console.log("your balance is:" + myBalance)
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
;
