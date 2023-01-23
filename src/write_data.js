const fs = require('fs')
// writes the data to an index.html file
writeData = (teamData, fileName) => {
    indexHTML = getHTML(teamData);
    
    fs.writeFile(fileName, indexHTML, err => {
        if (err) {
          console.error(err);
        }
    })
}

getHTML = (teamData) => {
    let indexHTML = ''
    indexHTML += getHeadHTML()
    indexHTML += getInfoHTML(teamData)
    indexHTML += getFooterHTML()
    // returns data
    return indexHTML
}
// returns top half of the html document string
getHeadHTML = () => {
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

// constructs information section dynamically
getInfoHTML = (teamData) => {
    let infoHTML = ''
    // sort the team data in terms of Manager, Engineers(alpha), Interns(alpha)
    teamSorted = sortData(teamData);
    teamSorted.forEach((member) => {
        switch(member.getRole())
        {
            case "Manager":
                infoHTML += getManagerHTML(member)
                break;
            case "Engineer":
                infoHTML += getEngineerHTML(member)
                break;
            case "Intern":
                infoHTML += getInternHTML(member)
                break;

        }
    })
    return infoHTML;
}
// returns the managers htmls dynamically
getManagerHTML = (member) => {
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
                        <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.id}</a></li>
                        <li class="list-group-item">Office number: ${member.officeNum}</li>
                        </ul>
                </section>
                    `
    return subHTML
}

// returns the engineer htmls dynamically
getEngineerHTML = (member) => {
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
                        <li class="list-group-item">Github: <a href="https://github.com/${member.github}" touch="__blank">${member.github}</a></li>
                        </ul>
                </section>`
    // returns subHTML
    return subHTML
}

// returns the intern htmls dynamically
getInternHTML = (member) => {
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

getFooterHTML = () => 
{
    return `
            </main>
        </body>


    </html>
</>`

}



// sort the data from Manager, Engineers (alphabetically), Interns(alphabetically)
sortData = (teamData) => {

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
    sortedData = sortedData.concat(sortAlphabetically(engineers))
    sortedData = sortedData.concat(sortAlphabetically(interns))
    // returns the data
    return sortedData
}

// applys a compare function to index into the objects
sortAlphabetically = (data) =>
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

module.exports = writeData