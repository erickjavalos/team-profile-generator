const Employee = require('../lib/Employee')

describe("Testing Employee Class", ()=>{
    it('Should call Employees getName helper function and return "Erick" ', () => {
        // test data to run project
        let testName = "Erick"
        // instantiate employee
        let employee = new Employee(testName, "1", "test@test.com")
        // known output of solution
        let solution = "Erick"
        // make comparison
        expect(employee.getName()).toEqual(solution);
    })

    it('Should call Employees getID helper function and return "1" ', () => {
        // test data to run project
        let testID = "1"
        // instantiate employee
        let employee = new Employee("Erick", testID, "test@test.com")
        // known output of solution
        let solution = "1"
        // make comparison
        expect(employee.getId()).toEqual(solution);
    })

    it('Should call Employees getEmail helper function and return "test@test.com" ', () => {
        // test data to run project
        // instantiate employee
        let employee = new Employee("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "test@test.com"
        // make comparison
        expect(employee.getEmail()).toEqual(solution);
    })


    it('Should call Employees getRole helper function and return "Employee" ', () => {
        // test data to run project
        // instantiate employee
        let employee = new Employee("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "Employee"
        // make comparison
        expect(employee.getRole()).toEqual(solution);
    })
})