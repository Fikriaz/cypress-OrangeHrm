describe('Validation Create new admin', () =>{

    before(() => {
         cy.login();
    })
    it('Validation Admin can create new user', ()=> {
       
        cy.contains('a.oxd-main-menu-item','Admin').click()
        cy.get('.oxd-text').should('be.visible')
        cy.get('.oxd-text').contains('Admin')

        //add user
        cy.get('.oxd-button').contains('Add').click()
        cy.get('.oxd-select-text').eq(0).click()
        cy.get('.oxd-select-dropdown').should('be.visible')
        cy.get('.oxd-select-option > span').contains('Admin').click()

        //add status
        cy.get('.oxd-select-text').eq(1).click()
        cy.get('.oxd-select-dropdown').should('be.visible')
        cy.get('.oxd-select-option > span').contains('Enabled').click()

        //add status
        cy.get('.oxd-autocomplete-text-input input[placeholder="Type for hints..."]')
            .should('be.visible')
            .click()
            .clear()
            .type('Ranga Akunuri')

        cy.wait(2000) // Tunggu suggestions
        cy.contains('Ranga Akunuri').click() // Pilih dari suggestions
       
    cy.contains('Username')
    .closest('.oxd-input-group')
    .find('input.oxd-input')
    .should('be.visible')
    .click()
    .clear()
    .type('testuser123')

    cy.contains('Password')
    .closest('.oxd-input-group')
    .find('input.oxd-input')
    .should('be.visible')
    .click()
    .clear()
    .type('admin123')
    
    cy.contains('Confirm Password')
    .closest('.oxd-input-group')
    .find('input.oxd-input')
    .should('be.visible')
    .click()
    .clear()
    .type('admin123')

    cy.get('.oxd-button[type="submit"]')
    .contains("Save")
    .click()
    })
})