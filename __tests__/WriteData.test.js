const WriteData = require('../src/WriteData')
// get classes
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

describe("Testing WriteData Class", ()=>{
    it('Should call initialize WriteData class and html property should match with solution', () => {
        // test data to run project
        const fileName = "./dist/index.html"
        let team_data = [
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
        //initialize
        let wd = new WriteData(team_data, fileName)
        // test variable
        let htmlTest = wd.html

        let solution = `<!DOCTYPE html>
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
                </header>

                <main>
                    <!-- Manager -->
                    <section class="card bg-light">  
                        <!-- <p>Manager</p> -->
                        <div class="card-header bg-primary text-white">
                            <h4>Joe Bruin</h4>
                            <h4>☕️ Manager</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 1</li>
                            <li class="list-group-item">Email: <a href="mailto:joebruin@gmail.com">joebruin@gmail.com</a></li>
                            <li class="list-group-item">Office number: 1</li>
                            </ul>
                    </section>
                        
                    <!-- Engineer -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Erick</h4>
                            <h4>🤓 Engineer</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 2</li>
                            <li class="list-group-item">Email: <a href="mailto:avaloserick97@gmail.com">avaloserick97@gmail.com</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/erickjavalos"  target="_blank">erickjavalos</a></li>
                            </ul>
                    </section>
                    <!-- Engineer -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Joey</h4>
                            <h4>🤓 Engineer</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 3</li>
                            <li class="list-group-item">Email: <a href="mailto:joeybruin@gmail.com">joeybruin@gmail.com</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/joeybruin"  target="_blank">joeybruin</a></li>
                            </ul>
                    </section>
                    <!-- Engineer -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Jon</h4>
                            <h4>🤓 Engineer</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 5</li>
                            <li class="list-group-item">Email: <a href="mailto:jon@gmail.com">jon@gmail.com</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/jon"  target="_blank">jon</a></li>
                            </ul>
                    </section>
                    <!-- Engineer -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Jona</h4>
                            <h4>🤓 Engineer</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 10</li>
                            <li class="list-group-item">Email: <a href="mailto:jona@gmail.com">jona@gmail.com</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/jona"  target="_blank">jona</a></li>
                            </ul>
                    </section>
                    <!-- Intern -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Alpha</h4>
                            <h4>🎓 Intern</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 7</li>
                            <li class="list-group-item">Email: <a href="mailto:alpha@joeybruin@gmail.com">alpha@joeybruin@gmail.com</a></li>
                            <li class="list-group-item">School: UCLA</li>
                            </ul>
                    </section>
                        
                    <!-- Intern -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Beta</h4>
                            <h4>🎓 Intern</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 8</li>
                            <li class="list-group-item">Email: <a href="mailto:beta@joeybruin@gmail.com">beta@joeybruin@gmail.com</a></li>
                            <li class="list-group-item">School: UCSC</li>
                            </ul>
                    </section>
                        
                    <!-- Intern -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Jason</h4>
                            <h4>🎓 Intern</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 6</li>
                            <li class="list-group-item">Email: <a href="mailto:jason@joeybruin@gmail.com">jason@joeybruin@gmail.com</a></li>
                            <li class="list-group-item">School: UCLA</li>
                            </ul>
                    </section>
                        
                    <!-- Intern -->
                    <section class="card bg-light">  
                        <div class="card-header bg-primary text-white">
                            <h4>Zulu</h4>
                            <h4>🎓 Intern</h4>
                        </div>
                        <ul class="list-group fs-8">
                            <li class="list-group-item">ID: 9</li>
                            <li class="list-group-item">Email: <a href="mailto:zulu@joeybruin@gmail.com">zulu@joeybruin@gmail.com</a></li>
                            <li class="list-group-item">School: USC</li>
                            </ul>
                    </section>
                        
                </main>
            </body>


        </html>
    </>`
        console.log(htmlTest)
        expect(htmlTest).toEqual(solution);
        
        
    })
})