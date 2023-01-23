const inquirer = require('inquirer');
// get questions hellper function
const questions = require('./src/questions')()
// write data helper function
const writeData = require('./src/write_data')
// get classes
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// ****************************************************************************
// GLOBAL VARIABLES
// ****************************************************************************

const fileName = "./dist/index.html"

let manager_data = {}
let team_data = []
// let teamSelected =?

const promptManager = () => {
    // prompt manager and save to global variable
    return questions.promptTeamManager()
        .then((teamManager)=> {
            let manager = new Manager(teamManager.name, teamManager.id, teamManager.email, teamManager.office)
            team_data.push(manager)
            promptMenu()
        });
};

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

const promptIntern = () => {
    // prompt manager and save to global variable
    return questions.promptIntern()
        .then((internData)=> {
            let intern = new Intern(internData.name, internData.id, internData.email, internData.school)
            team_data.push(intern)
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
                writeData(team_data)
            }


        })
}



// promptManager()

// testing

team_data = [
    new Manager('Joe Bruin','1','joebruin@gmail.com','1'),
    new Engineer('Erick','2','avaloserick97@gmail.com','erickjavalos'),
    new Engineer('Joey','3','joeybruin@gmail.com','joeybruin'),
    new Engineer('Jon','5','jon@gmail.com','jon'),
    new Engineer('Jona','10','jona@gmail.com','jona'),
    new Intern('Jason','6','jason@joeybruin@gmail.com','UCLA'),
    new Intern('Alpha','7','alpha@joeybruin@gmail.com','UCLA'),
    new Intern('Beta','8','beta@joeybruin@gmail.com','UCSC'),
    new Intern('Zulu','9','zulu@joeybruin@gmail.com','USC')
  ]
writeData(team_data,fileName)
  

// Promise.all([promptManager])
// .then(promptMenuCB)
// .then(promptInfo)
// .then((info) => {
//     console.log(info)
// })