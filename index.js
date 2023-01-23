const inquirer = require('inquirer');
// get questions hellper function
const questions = require('./src/questions')()
// write data helper class
const WriteData = require('./src/WriteData')
// get classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// ****************************************************************************
// GLOBAL VARIABLES
// ****************************************************************************

const fileName = "./dist/index.html"

let manager_data = {}
let team_data = []

// start application
const start = () => {
    // prompt manager and save to global variable
    return questions.promptTeamManager()
        .then((teamManager)=> {
            let manager = new Manager(teamManager.name, teamManager.id, teamManager.email, teamManager.office)
            team_data.push(manager)
            promptMenu()
        });
};

// prompt engineer
const promptEngineer = () => {
    // prompt manager and save to global variable
    return questions.promptEngineer()
        .then((engineerData)=> {
            console.log(engineerData)
            let engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
            team_data.push(engineer)
            promptMenu()
        });
};
// prompt intern
const promptIntern = () => {
    // prompt manager and save to global variable
    return questions.promptIntern()
        .then((internData)=> {
            let intern = new Intern(internData.name, internData.id, internData.email, internData.school)
            team_data.push(intern)
            promptMenu()
        });
};

// prompt menu to select from engineer or intern
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
                // create write data object
                let wd = new WriteData(team_data, fileName)
                // write to file
                wd.write()
            }


        })
}


// start application
start()