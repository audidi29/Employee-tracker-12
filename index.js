// const inquirer = require("inquirer");
// const mysql = require("mysql2");
// require("console.table");
// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     user: "root",
//     password: "coupleV1@",
//     database: "employee_db",
//   },
//   console.log("connected")
// );
// const logotext = logo({
//   name: "employee-tracker",
// }).render();
// console.log(logotext);
// function employeeTracker() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "startingquestions",
//         choices: [
//           "viewallemployees",
//           "viewalldepartments",
//           "viewallroles",
//           "adddepartment",
//           "addrole",
//           "addemployee",
//           "updateemployee",
//           "quit",
//         ],
//       },
//     ])
//     .then((answers) => {
//       console.log("I selected   :" + answers.startingquestions);
//       let options = answers.startingquestions;
//       switch (options) {
//         case "viewallemployees":
//           viewallemployees();
//           break;
//         case "viewalldepartments":
//           viewalldepartments();
//           break;
//         case "viewallroles":
//           viewallroles();
//           break;
//         case "adddepartment":
//           adddepartment();
//           break;
//         case "addrole":
//           addrole();
//           break;
//         case "addemployee":
//           addemployee();
//           break;
//         case "updateemployee":
//           updateemployee();
//           break;
//         case "quit":
//           quit();
//           break;
//       }
//     });
// }
// function viewallemployees() {
//   db.query("SELECT * FROM employee", function (err, data) {
//     if (err) {
//       console.log(err);
//     }
//     console.table(data), employeeTracker();
//   });
// }
// function viewallroles() {
//   db.query("SELECT * FROM role", function (err, data) {
//     if (err) {
//       console.log(err);
//     }
//     console.table(data), employeeTracker();
//   });
// }
// function viewalldepartments() {
//   db.query("SELECT * FROM department", function (err, data) {
//     if (err) {
//       console.log(err);
//     }
//     console.table(data), employeeTracker();
//   });
// }
// function adddepartment() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "adddepartment",
//         message: "enter department to add",
//       },
//     ])
//     .then((response) => {
//       let nameOfDepartment = response.adddepartment;
//       db.query(
//         `INSERT INTO department (dept_name) VALUES ("${nameOfDepartment}")`,
//         function (err, data) {
//           if (err) {
//             console.log(err);
//           }
//           viewalldepartments();
//         }
//       );
//     });
// }
// function addrole() {
//   db.query("SELECT * FROM department", function (err, data) {
//     if (err) {
//       console.log(err);
//       return employeeTracker();
//     }
//     const departmentList = data.map((dept) => ({
//       value: dept.id,
//       name: dept.dept_name,
//     }));
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "addRole",
//           message: "what role would you like to add:",
//         },
//         {
//           type: "input",
//           name: "salary",
//           message: "what's the salary expectation for this role?",
//         },
//         {
//           type: "list",
//           name: "departmentId",
//           message: "which department does this role belong to?",
//           choices: departmentList,
//         },
//       ])
//       .then((response) => {
//         let role = response.addRole;
//         let salary = response.salary;
//         let departmentId = response.departmentId;
//         db.query(
//           `INSERT INTO role (title, salary, department_id)
//         VALUES
//         ("${role}", "${salary}","${departmentId}")
//         `,
//           function (err, data) {
//             if (err) {
//               console.log(err), employeeTracker();
//             }
//             viewallroles();
//           }
//         );
//       });
//   });
// }
// function addemployee() {
//   db.query("SELECT * FROM role", function (err, data) {
//     if (err) {
//       console.log(err);
//       employeeTracker();
//     }
//     const roles = data.map((role) => ({
//       value: role.id,
//       name: role.title,
//     }));
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "firstName",
//           message: "what's the employee's first name?",
//         },
//         {
//           type: "input",
//           name: "lastName",
//           message: "what's the employee's last name?",
//         },
//         {
//           type: "list",
//           name: "roleChoice",
//           message: "what's the employee's role?",
//           choices: roles,
//         },
//       ])
//       .then((answers) => {
//         let firstName = answers.firstName;
//         let lastName = answers.lastName;
//         let roleId = answers.roleChoice;
//         db.query(
//           `
//   INSERT INTO employee (first_name, last_name, role_id)
//   VALUES 
//   ("${firstName}", "${lastName}", "${roleId}")
//   `,
//           function (err, data) {
//             if (err) {
//               console.log(err);
//               employeeTracker();
//             }
//             viewallemployees();
//           }
//         );
//       });
//   });
// }
// function updateemployee() {
//   db.query("SELECT * FROM employee", function (err, data) {
//     if (err) {
//       console.log(err);
//       employeeTracker();
//     }
//     const employeeChoices = data.map((employee) => ({
//       id: employee.id,
//       firstName: employee.first_name,
//       lastName: employee.last_name,
//         }));
//         console.log(employeeChoices)
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "employeeId",
//           message: "which employee would you like to update (select employee by ID#?",
//           // choices: [employeeChoices],
//         },
//         {
//           type: "input",
//           name: "firstName",
//           message: "update firstName",
//         },
//         {
//           type: "input",
//           name: "lastName",
//           message: "update lastName",
//         },
//       ])
//       .then((update) => {
//         let employeeId = update.employeeId;
//         let updateFirst = update.firstName;
//         let updateLast = update.lastName;
//         db.query(
//           `UPDATE employee SET first_name = "${updateFirst}", last_name = "${updateLast}" WHERE id=${employeeId};`,
//           function (err, data) {
//             err ? console.log(err) : viewallemployees(); 
//           }
//         );
//       });
//   });
// }
// function quit() {
//   console.log("application close");
//   process.exit();
// }

// employeeTracker();


// Importing modules using ESM syntax
import inquirer from 'inquirer';
import mysql from 'mysql2/promise';
import consoleTable from 'console.table';

// Database connection setup
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coupleV1@',
  database: 'employee_db'
});

console.log('Connected to the database.');

// // Logo module (if you are using it)
// import logo from 'your-logo-module'; // Update with your actual logo module import

// console.log(logo.render()); // Log your logo if you have one

// Main function to handle the employee tracker logic
async function employeeTracker() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'startingquestions',
        message: 'What would you like to do?',
        choices: [
          'viewallemployees',
          'viewalldepartments',
          'viewallroles',
          'adddepartment',
          'addrole',
          'addemployee',
          'updateemployee',
          'quit'
        ]
      }
    ]);

    const { startingquestions } = answers;

    switch (startingquestions) {
      case 'viewallemployees':
        await viewallemployees();
        break;
      case 'viewalldepartments':
        await viewalldepartments();
        break;
      case 'viewallroles':
        await viewallroles();
        break;
      case 'adddepartment':
        await adddepartment();
        break;
      case 'addrole':
        await addrole();
        break;
      case 'addemployee':
        await addemployee();
        break;
      case 'updateemployee':
        await updateemployee();
        break;
      case 'quit':
        quit();
        break;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to view all employees
async function viewallemployees() {
  const [rows] = await db.query('SELECT * FROM employee');
  console.table(rows);
  employeeTracker();
}

// Function to view all departments
async function viewalldepartments() {
  const [rows] = await db.query('SELECT * FROM department');
  console.table(rows);
  employeeTracker();
}

// Function to view all roles
async function viewallroles() {
  const [rows] = await db.query('SELECT * FROM role');
  console.table(rows);
  employeeTracker();
}

// Function to add a department
async function adddepartment() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'adddepartment',
      message: 'Enter department name:'
    }
  ]);

  const { adddepartment: departmentName } = answers;

  await db.query('INSERT INTO department (dept_name) VALUES (?)', [departmentName]);
  console.log(`Department '${departmentName}' added.`);
  employeeTracker();
}

// Function to add a role
async function addrole() {
  // Logic for adding a role
  // ...
}

// Function to add an employee
async function addemployee() {
  // Logic for adding an employee
  // ...
}

// Function to update an employee
async function updateemployee() {
  // Logic for updating an employee
  // ...
}

// Function to quit the application
function quit() {
  console.log('Application closed.');
  process.exit();
}

// Call the main function to start the employee tracker
employeeTracker();
