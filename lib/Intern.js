const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        // call constructor of base class
        super(name,id,email)
        // initialize the office number of employee
        this.school = school
    }
    // gets github username
    getSchool() {
        return this.school
    }

    // gets role
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;