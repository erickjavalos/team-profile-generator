const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        // call constructor of base class
        super(name,id,email)
        // initialize the office number of employee
        this.officeNum = officeNum
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;