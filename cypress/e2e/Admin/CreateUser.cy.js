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
        cy.get('.oxd-select-text').contains('-- Select --').click()
        cy.get('.oxd-select-text-input').contains('Admin').click()
        

    })
})