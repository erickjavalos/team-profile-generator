const inquirer = require('inquirer');
const fs = require('fs');

// ****************************************************************************
// GLOBAL VARIABLES
// ****************************************************************************

const fileName = "/dist/index.html"

// Questions to prompt user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
];