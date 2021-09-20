
// const Manager = require("../lib/Manager.js")
// const Engineer = require("../lib/Engineer.js")
// const Intern = require("../lib/Intern.js")
// const html = require("../dist/index.html")
// const Employee = require("../lib/Employee.js")
// const generatedEmployees = [];

// // questions based on role
// const questions = (inquirer.prompt)([
//     { type: "list",
//       name: "employeeType",
//       message: "What type of employee do you"



//     },
//     {
//         type:"input",
//         name: "name",
//         message: "What is the employee's name?",
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the employee's ID?",
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "what is the employee's email?",
//     },
//     {
//         type: "list",
//         name: "role",
//         message: "What is the employee's role?",
//         choices: [
//             "Employee",
//             "Intern",
//             "Engineer",
//             "Manager",
//         ]
//     }
// ]);
// // if user selects Intern prompt employee what their school is.
// if (questions.role === "Intern"){
//     inquirer.prompt([
//         {
//         type: "input",
//         name: "school",
//         message: "What school do you attend?",
//         }
//     ])
// }
// // if user selects Engineer prompt employee what their GitHub is.
// if (questions.role === "Engineer"){
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "github",
//             message: "What is your github?",
//         }
//     ])
// }
// //  if user selects Manager prompt employee what their office number is.
// if (questions.role === "Manager"){
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "What is your office number?",
//         }
//     ])
// }


// .then((data)=>{
//     switch(data.choice){
//         case 'Engineer':
//             addEngineer();
//             break;
//         case "intern":
//             addIntern();
//             break;
//         default:
//             buildTheteam();
//     }
// })
