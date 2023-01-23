const Intern = require('../lib/Intern')

describe("Testing Intern Class", ()=>{
    it('Should call Intern getName helper function and return "Erick" ', () => {
        // test data to run project
        let testName = "Erick"
        // instantiate intern
        let intern = new Intern(testName, "1", "test@test.com")
        // known output of solution
        let solution = "Erick"
        // make comparison
        expect(intern.getName()).toEqual(solution);
    })

    it('Should call Intern getID helper function and return "1" ', () => {
        // test data to run project
        let testID = "1"
        // instantiate intern
        let intern = new Intern("Erick", testID, "test@test.com")
        // known output of solution
        let solution = "1"
        // make comparison
        expect(intern.getId()).toEqual(solution);
    })

    it('Should call Intern getEmail helper function and return "test@test.com" ', () => {
        // test data to run project
        // instantiate intern
        let intern = new Intern("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "test@test.com"
        // make comparison
        expect(intern.getEmail()).toEqual(solution);
    })


    it('Should call Intern getRole helper function and return "intern" ', () => {
        // test data to run project
        // instantiate intern
        let intern = new Intern("Erick", "1", "test@test.com")
        // known output of solution
        let solution = "Intern"
        // make comparison
        expect(intern.getRole()).toEqual(solution);
    })
})
