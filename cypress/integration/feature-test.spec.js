describe("Home page base functions", function() {

    beforeEach( function() {
        cy.visit("/")
    })

    it("Welcome Message", function() {
        cy.get("#header").should("contain", "Welcome to Chitter")
    })

    it("Register Button", function() {
        cy.get("#register").should("contain", "Register")
    })
})

describe("Register Page", function() {
    beforeEach( function() {
        cy.task('taskTruncateTables')
        cy.task('taskCreateTestUser')
        cy.visit("/")
        cy.get("#register").click()
    })

    
    it("Header", function() {
        cy.get("#register-header").should("contain", "Register")
    })

    it("Form", function() {
        cy.get("#register-submit").should("contain", "Submit")
    })
})   
