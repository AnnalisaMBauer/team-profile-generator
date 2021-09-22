
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const generatehtml = require("./dist/generateHTML.js")
const Employee = require("./lib/Employee.js")
const inquirer = require('inquirer');
const fs = require('fs');
const generatedEmployees = [];

// questions based on role
const questionsForManager = [{
    type: 'input',
    name: 'name',
    message: 'What is the name of the Manager?',
},
{
    type: 'number',
    name: 'id',
    message: 'What is the ID number for this Manager?',
},
{
    type: 'input',

    name: 'email',
    message: 'What is the email address for this Manager?',
},
{
    type: 'number',
    name: 'officeNumber',
    message: 'What is the office number for this Manager?'
}
]
const questionsForEngineer = [{
    type: 'input',
    name: 'name',
    message: 'What is the name of the Engineer?',
},
{
    type: 'number',
    name: 'id',
    message: 'What is the ID number for this Engineer?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the email address for this Engineer?',
},
{
    type: 'input',
    name: 'github',
    message: 'What is the GitHub for the Engineer?',
}
]
const questionsForIntern =[{
    type: 'input',
    name: 'name',
    message: 'What is the name of the Intern?',
},
{
    type: 'number',
    name: 'id',
    message: 'What is the ID number for this Intern?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the email address for this Intern?',
},
{
    type: 'input',
    name: 'school',
    message: 'What school does this Intern attend?'
}
]
// option to add more Employees
const addEmployees = [
    {
        type: 'checkbox',
        name: 'inputEmployee',
        message: 'Would you like to input another employee?',
        choices: ["Input Engineer", "Input Intern", "No other team members to add"],
    }
]
inquirer.prompt(questionsForManager).then(data=> {
    // <------- use the new keyword and create a new Manager passing in the values
    // for name, id, email from the data object (which are the answers)
    // then push the newly created one onto generatedEmployees
    const employee = new Manager (data.name, data.id, data.email, data.officeNumber)
   generatedEmployees.push(employee);
   console.log(generatedEmployees);
inquirer.prompt(addEmployees).then((data)=>{
  switch(data.choice){
      case 'Engineer':
       addEngineer();
          break;
      case "Intern":
      addIntern();
          break;
      default:
        //  const htmlPageContent = buildTheteam(data.choice);
        //  fs.writeFile('index.html', htmlPageContent, (err) =>
        //  err
        //     ? console.log(err)
        //     : console.log("Success! Your team profile has been generated!")
        //  );
   }
})
})

function addEngineer(choice){
    switch (choice){
        case 'add Engineer':
            inquirer.prompt(questionsForEngineer).then((data) =>{
                const employee = new Engineer (data.name, data.id, data.email, data.github)
                generatedEmployees.push(employee);
                console.log(generatedEmployees);
            })
    }
}

//lets ask for manager name, id, email, officenumebr

//pass the answers through a .then()
 //in the .then push the manager info to an array and run another function that asks the user if they want to add an engineer or intern or done. 
//  then create a switch statement that checks for what the user answered and run functions based on those answers*see switch above.
