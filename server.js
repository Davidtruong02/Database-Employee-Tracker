const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker_db',
    },
        console.log('Connected to the employee_db database.')
    );

    startTracker();

        // function to start the prompts
        function startTracker() {
            inquirer
                .prompt({
                    name: 'action',
                    type: 'list',
                    message: 'What would you like to do?',
                    choices: [
                        'View all employees',
                        'View all departments',
                        'View all roles',
                        'Add employee',
                        'Add department',
                        'Add role',
                        'Update employee role',
                        'Exit'
                    ],

                })
                .then(function (answer) {
                    switch (answer.action) {
                        case 'View all employees':
                            viewEmployees();
                            break;
                        case 'View all departments':
                            viewDepartments();
                            break;
                        case 'View all roles':
                            viewRoles();
                            break;
                        case 'Add employee':
                            addEmployee();
                            break;
                        case 'Add department':
                            addDepartment();
                            break;
                        case 'Add role':
                            addRole();
                            break;
                        case 'Update employee role':
                            updateEmployeeRole();
                            break;
                        case 'Exit':
                            connection.end();
                            break;
                    }
                });
        }
    

        

        // function to view all employees
        function viewEmployees() {
            db.query('SELECT * FROM employee', function (err, results) {
                console.table(results);
                startTracker();
            });
        }

        // function to view all departments
        function viewDepartments() {
            db.query('SELECT * FROM department', function (err, results) {
                console.table(results);
                startTracker();
            });
        }

        // function to view all roles
        function viewRoles() {
            db.query('SELECT * FROM role', function (err, results) {
                console.table(results);
                startTracker();
            });
        }


        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }); 