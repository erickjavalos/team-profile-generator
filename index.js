const inquirer = require('inquirer');
const questions = require('./src/questions')()
const writeData = require('./src/write_data')

const fs = require('fs');
const { PatternPrompt } = require('jest-watcher');

// ****************************************************************************
// GLOBAL VARIABLES
// ****************************************************************************

const fileName = "/dist/index.html"

let manager_data = {}
let team_data = []
// let teamSelected =?

const promptManager = () => {
    // prompt manager and save to global variable
    return questions.promptTeamManager()
        .then((teamManager)=> {
            teamManager['id'] = "team manager"
            team_data.push(teamManager)
            promptMenu()
        });
};

const promptEngineer = () => {
    // prompt manager and save to global variable
    return questions.promptEngineer()
        .then((engineerData)=> {
            engineerData['id'] = "engineer"
            team_data.push(engineerData)
            promptMenu()
        });
};

const promptIntern = () => {
    // prompt manager and save to global variable
    return questions.promptIntern()
        .then((internData)=> {
            internData['id'] = "intern"
            team_data.push(internData)
            promptMenu()
        });
};

const promptMenu = (data) => {
    // prompt for team member
    manager_data = data
    return questions.promptMenu()
        .then((selection) => {
            switch(selection.menu){
                case "Engineer":
                    break;
            }
            if (selection.menu == "Engineer")
            {
                return promptEngineer()                    
            }
            else if (selection.menu == "Intern")
            {
                return promptIntern()                    
            }
            else{
                // writeData(team_data)
                console.log(team_data)
            }


        })
}



promptManager()
  

// Promise.all([promptManager])
// .then(promptMenuCB)
// .then(promptInfo)
// .then((info) => {
//     console.log(info)
// })