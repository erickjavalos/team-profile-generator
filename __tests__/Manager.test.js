const Manager = require('../lib/Manager')

describe("Testing Manager Class", ()=>{
    it('Should call Manager getName helper function and return "Erick" ', () => {
        // test data to run project
        let testName = "Erick"
        // instantiate Manager
        let manager = new Manager(testName, "1", "test@test.com")
        // known output of solution
        let solution = "Erick"
        // make comparison
        expect(manager.getName()).toEqual(solution);
    })

    it('Should call Manager getID helper function and return "1" ', () => {
        // test data to run project
        let testID = "1"
        // instantiate manager
        let manager = new Manager("Erick", testID, "test@test.com")
        // known output of solution
        let solution = "1"
        // make comparison
        expect(manager.getId()).toEqual(solution);
    })

    it('Should call Manager getEmail helper function and return "test@test.com" ', () => {
        // test data to run project
        // instantiate manager
        let manager = new Manager("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "test@test.com"
        // make comparison
        expect(manager.getEmail()).toEqual(solution);
    })


    it('Should call Manager getRole helper function and return "manager" ', () => {
        // test data to run project
        // instantiate manager
        let manager = new Manager("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "Manager"
        // make comparison
        expect(manager.getRole()).toEqual(solution);
    })
})
