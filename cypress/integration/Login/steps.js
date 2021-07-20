const { expect } = require("chai");

Given(/^que eu acesso o site$/, () => {
	cy.visit('/')
});


When(/^informo login e senha$/, () => {
	  cy.get('#email').click()
    cy.get('#email').type('cleytonanderson1@gmail.com')

    cy.get('#password').click()
    cy.get('#password').type('12345678')
});


Then(/^devo logar no sistema$/, () => {
	cy.get('#login > form > fieldset > div > span:nth-child(2) > input[type=submit]').click()
    cy.contains('GRSOCIAL').should('to.have.length', 1)

    cy.request('/').should(
    (response) => {
    expect(response.status).to.eq(200)
    // the server sometimes gets an extra comment posted from another machine
    // which gets returned as 1 extra object
    // expect(response.body)
    //   .to.have.property('length')
    //   .and.be.oneOf([63452])
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
  },
)
});
