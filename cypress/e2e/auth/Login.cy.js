describe("Validation Login User",() => {

    it('User can login with valid username and password', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("Admin");
    cy.get('.oxd-input[name="password"]')
    .type('admin123');
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
    cy.contains('.oxd-text','Dashboard')
    })

})

describe("Invalidation Login User",() => {

    it('User cannot login with valid username and invalid password', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("Admin");
    cy.get('.oxd-input[name="password"]')
    .type('user');
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
    cy.contains('.oxd-text','Invalid credentials');

    })


    it('User cannot login with valid invalid username and valid password', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("user");
    cy.get('.oxd-input[name="password"]')
    .type('admin123');
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
    cy.contains('.oxd-text','Invalid credentials');
    })

    
    it('User cannot login with invalid username and password', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("seraef");
    cy.get('.oxd-input[name="password"]')
    .type('user123');
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
    cy.contains('.oxd-text','Invalid credentials');

    })

    it('User cannot login with valid username and password field is empty', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("Admin");
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
    cy.contains('.oxd-text','Required')
    })

    it('User cannot login with username field is empty and valid password', ()=> {
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("Admin");
    cy.get('.oxd-input[name="password"]')
    .type('admin123');
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
   cy.contains('.oxd-text','Required')
    })

    it('User cannot login with username and password field is empty', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //fill form
    cy.get('.oxd-input[name="username"]')
    .type("Admin");
    cy.get('.oxd-input[name="password"]')
    .type('admin123');
    cy.get('.oxd-button[type="submit"]')
    .click();

    //Assertion
    cy.contains('.oxd-text','Required')
    cy.contains('.oxd-text','Required')
    })
})