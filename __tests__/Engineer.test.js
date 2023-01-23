const Engineer = require('../lib/Engineer')

describe("Testing Engineer Class", ()=>{
    it('Should call Engineers getName helper function and return "Erick" ', () => {
        // test data to run project
        let testName = "Erick"
        // instantiate employee
        let employee = new Engineer(testName, "1", "test@test.com")
        // known output of solution
        let solution = "Erick"
        // make comparison
        expect(employee.getName()).toEqual(solution);
    })

    it('Should call Engineers getID helper function and return "1" ', () => {
        // test data to run project
        let testID = "1"
        // instantiate employee
        let employee = new Engineer("Erick", testID, "test@test.com")
        // known output of solution
        let solution = "1"
        // make comparison
        expect(employee.getId()).toEqual(solution);
    })

    it('Should call Engineers getEmail helper function and return "test@test.com" ', () => {
        // test data to run project
        // instantiate employee
        let employee = new Engineer("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "test@test.com"
        // make comparison
        expect(employee.getEmail()).toEqual(solution);
    })


    it('Should call Engineers getRole helper function and return "Employee" ', () => {
        // test data to run project
        // instantiate employee
        let engr = new Engineer("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "Engineer"
        // make comparison
        expect(engr.getRole()).toEqual(solution);
    })
})
