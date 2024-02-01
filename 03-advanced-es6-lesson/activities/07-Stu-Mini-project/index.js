const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "what is your Github Username?",
      name: "github",
    },
  ]);

const generateHTML = (answers) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <title>Bio</title>
  </head>
  <body>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Hi! My name is ${answers.username}</h1>
<ul class="list-group">
    <li class="list-group-item col-5">I am from ${answers.location}</li>
    <li class="list-group-item col-5"> My GitHub username is: ${answers.github}</li>
    <li class="list-group-item col-5">My LinkedIn is: ${answers.linkedin} </li>
</ul>
    </div>
    </div>
  </body>
</html>
`;

promptUser()
  .then((answers) => writeFileAsync("index.html", generateHTML(answers)))
  .then(() => console.log("Succesfully wrote to index.html"))
  .catch((err) => console.error(err));
