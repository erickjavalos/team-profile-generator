const fs = require('fs')


class WriteData{

    constructor(teamData, fileName){
        this.teamData = teamData;
        this.fileName = fileName
        this.html = this.init()
    }
    // ****************************************
    // Utility Functions
    // ****************************************

    // initialize
    init() {
        // access private getHTML function
        return this.#getHTML(this.teamData);

    }
    // write file
    write()
    {
        fs.writeFile(this.fileName, this.html, err => {
            if (err) {
              console.error(err);
            }
            else{
                console.log("Successfully wrote a index.html to /dist/")
            }
        })
    }

    // ****************************************
    // Helper Functions (private)
    // ****************************************

    // constructs html
    #getHTML = (teamData) => {
        let indexHTML = ''
        indexHTML += this.#getHeadHTML()
        indexHTML += this.#getInfoHTML(teamData)
        indexHTML += this.#getFooterHTML()
        // returns data
        return indexHTML
    }

    // returns top half of the html document string
    #getHeadHTML = () => {
        return `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
                <link href="./styles.css" rel="stylesheet">
                <title>Team Profile Generator</title>
            </head>
            <body>
                <header class="row">
                    <h1>My Team</h1>
                </header>`
    }
    // constructs and returns team data html
    #getInfoHTML = (teamData) => {
        let infoHTML = ''
        // sort the team data in terms of Manager, Engineers(alpha), Interns(alpha)
        let teamSorted = this.#sortData(teamData);
        teamSorted.forEach((member) => {
            console.log(member.getRole())
            switch(member.getRole())
            {
                case "Manager":
                    infoHTML += this.#getManagerHTML(member)
                    break;
                case "Engineer":
                    infoHTML += this.#getEngineerHTML(member)
                    break;
                case "Intern":
                    infoHTML += this.#getInternHTML(member)
                    break;
    
            }
        })
        return infoHTML;
    }

    // sort the data from Manager, Engineers (alphabetically), Interns(alphabetically)
    #sortData = (teamData) => {

        // sort the data from Manager, Engineers (alphabetically), Interns(alphabetically)
        let manager = []
        let engineers = []
        let interns = []
        // total sorted data
        let sortedData = []
        // returns data in sub teams
        for (let i = 0; i < teamData.length; i++)
        {
            switch(teamData[i].getRole())
            {
                case "Manager":
                    manager.push(teamData[i])
                    break;
                case "Engineer":
                    engineers.push(teamData[i])
                    break;
                case "Intern":
                    interns.push(teamData[i])
                    break;

            }
        }

        // sort data in manager, engineers (alphabetically), interns(alphabetically)
        sortedData.push(manager[0])
        sortedData = sortedData.concat(this.#sortAlphabetically(engineers))
        sortedData = sortedData.concat(this.#sortAlphabetically(interns))
        // returns the data
        return sortedData
    }
    
    // applys a compare function to index into the objects
    #sortAlphabetically = (data) =>
    {
        data.sort((a,b)=> {
            if (a.name < b.name){
                return -1
            }
            
            if ( a.name > b.name ){
                return 1;
            }
            // they are the same
            return 0;
        })
        // returns array
        return data
    }

    // returns the managers htmls dynamically
    #getManagerHTML = (member) => {
        let subHTML = `

                <main>
                    <!-- Manager -->
                    <section class="card bg-light">  
                        <!-- <p>Manager</p> -->
                        <div class="card-header bg-primary text-white">
                            <h4>${member.name}</h4>
                            <h4>☕️ Manager</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: ${member.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                            <li class="list-group-item">Office number: ${member.officeNum}</li>
                            </ul>
                    </section>
                        `
        return subHTML
    }

    // returns the engineer htmls dynamically
    #getEngineerHTML = (member) => {
        let subHTML = `
                    <!-- Engineer -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>${member.name}</h4>
                            <h4>🤓 Engineer</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: ${member.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${member.github}"  target="_blank">${member.github}</a></li>
                            </ul>
                    </section>`
        // returns subHTML
        return subHTML
    }

    // returns the intern htmls dynamically
    #getInternHTML = (member) => {
        let subHTML = `
                    <!-- Intern -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>${member.name}</h4>
                            <h4>🎓 Intern</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: ${member.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                            <li class="list-group-item">School: ${member.school}</li>
                            </ul>
                    </section>
                        `
        // returns subHTML
        return subHTML
    }

    #getFooterHTML = () => 
    {
        return `
                </main>
            </body>


        </html>
    </>`

    }




}

module.exports = WriteData;