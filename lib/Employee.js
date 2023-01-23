// Employee 

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // **************************
    // Getter Functions
    // **************************

    // returns name of user
    getName() {
        return this.name
    }

    // returns id
    getId() {
        return this.id
    }

    // returns email
    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;