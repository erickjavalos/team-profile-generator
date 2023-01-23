const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        // call constructor of base class
        super(name,id,email)
        // initialize the office number of employee
        this.github = github
    }
    // gets github username
    getGithub() {
        return this.github
    }

    // gets role
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;