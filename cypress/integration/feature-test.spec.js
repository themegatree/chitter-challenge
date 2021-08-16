describe("Feature Tests: ", function(){

    beforeEach( function() {
        cy.task('taskTruncateTables')
        cy.task('taskCreateTestUser')
        cy.visit("/")
    })

    it("Post a message", function() {
        cy.get("#signin-username").type("dummy001")
        cy.get("#signin-password").type("password")
        cy.get("#signin-submit").click()
        cy.get("#new-post-text").type("Vote Shiv 2021")
        cy.get("#new-post-submit").click()
        cy.get("#chitter-0").should("contain", "Vote Shiv 2021")
    })

    it("Reverse Chronological Order", function() {
        cy.get("#signin-username").type("dummy001")
        cy.get("#signin-password").type("password")
        cy.get("#signin-submit").click()
        cy.get("#new-post-text").type("Vote Shiv 2021")
        cy.get("#new-post-submit").click()
        cy.get("#new-post-text").type("Vote Shiv 2022")
        cy.get("#new-post-submit").click()
        cy.get("#chitter-0").should("contain", "Vote Shiv 2022")
        cy.get("#chitter-1").should("contain", "Vote Shiv 2021")
    })

    it("Date displayed", function() { //there must be a better way to do this
        cy.get("#signin-username").type("dummy001")
        cy.get("#signin-password").type("password")
        cy.get("#signin-submit").click()
        cy.get("#new-post-text").type("Vote Shiv 2021")
        cy.get("#new-post-submit").click()
        let currentDate = new Date();
        let Day = currentDate.getDate();
        let Year = currentDate.getFullYear();
        cy.get("#chitter-0").should("contain", `${Day} ${Year}`)
    })

    it("Signup", function(){
        cy.get("#register").click()
        cy.get("#register-username").type("dummy002")
        cy.get("#register-password").type("password2")
        cy.get("#register-submit").click()
        cy.get("#header").should("contain", "Hello dummy002")
    })

    it("Login", function() {
        cy.get("#signin-username").type("dummy001")
        cy.get("#signin-password").type("password")
        cy.get("#signin-submit").click()
        cy.get("#header").should("contain", "Hello dummy001")    
    })

    it("Signout", function() {
        cy.get("#signin-username").type("dummy001")
        cy.get("#signin-password").type("password")
        cy.get("#signin-submit").click()
        cy.get("#signout").click()     
        cy.get("#header").should("contain", "Welcome to Chitter")     
    })
})
