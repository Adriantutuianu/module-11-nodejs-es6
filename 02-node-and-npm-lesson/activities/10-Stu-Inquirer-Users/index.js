const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])
  .then((data) => {
    console.log(data);
    const dataString = JSON.stringify(data);
    fs.writeFile("data.txt", dataString, (err) =>
      err ? console.log("err") : console.log("wro")
    );
  });
