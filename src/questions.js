// Questions
//
// Description: prompts for all questions asked by application with helper functions 
//


const inquirer = require('inquirer');


module.exports = () => {
    return {
        promptTeamManager : () => {
            const question = [
                // team manager
                {
                    name: 'name',
                    type: "input",
                    message: 'Team Managers Name',
                    default: 'Joe Bruin'
                },
                {
                    name: 'id',
                    type: "input",
                    message: 'Employee ID',
                    default: '0000'
                },
                {
                    name: 'email',
                    type: "input",
                    message: 'Email',
                    default: 'JohnDoe@gmail.com'
                },
                {
                    name: 'office',
                    type: "input",
                    message: 'Office Number',
                    default: '0000'
                },

            ]
            return inquirer.prompt(question);

        },
        promptMenu : () => {
            const question = [
                // team manager
                {
                    name: 'menu',
                    type: "list",
                    message: 'Select to build team:',
                    choices: ['Engineer', 'Intern', 'Finish building my Team'],
                }
            ]
            return inquirer.prompt(question);
        },
        promptIntern : () => {
            const question = [
                // intern name
                {
                    name: 'name',
                    type: "input",
                    message: `Intern's name:`,
                    default: 'John Bruin'
                },
                {
                    name: 'id',
                    type: "input",
                    message: `Intern's id:`,
                    default: '2222'
                },
                {
                    name: 'email',
                    type: "input",
                    message: `Intern's email:`,
                    default: 'JohnDoey@gmail.com'
                },
                {
                    name: 'school',
                    type: "input",
                    message: `Intern's school:`,
                    default: 'UCLA'
                },
            ]
            return inquirer.prompt(question);
        },
        promptEngineer : () => {
            const question = [
                // intern name
                {
                    name: 'name',
                    type: "input",
                    message: `Engineer's name:`,
                    default: 'Joey Bruin'
                },
                {
                    name: 'id',
                    type: "input",
                    message: `Engineers's id:`,
                    default: '1111'
                },
                {
                    name: 'email',
                    type: "input",
                    message: `Engineer's email:`,
                    default: 'JoeyDoey@gmail.com'
                },
                {
                    name: 'github',
                    type: "input",
                    message: `Github username:`,
                    default: 'joebruin'
                },
            ]
            return inquirer.prompt(question);
        },
    }
}