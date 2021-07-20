const { expect } = require("chai");


Given(/^que eu acesso o site$/, () => {
	cy.visit('/')
});


When(/^informo login e senha$/, () => {
	cy.get('#email').click()
    cy.get('#email').type('cleytonanderson1@gmail.com')

    cy.get('#password').click()
    cy.get('#password').type('12345678')
    cy.get('#login > form > fieldset > div > span:nth-child(2) > input[type=submit]').click()
});

Then(/^cadastro um beneficiario$/, () => {
    cy.xpath('/html/body/div/nav/div/div/ul[1]/li[2]/a').last().click()
    cy.xpath('/html/body/div/nav/div/div/ul[1]/li[2]/div/a[2]').click()
    cy.xpath('//*[@id="app"]/main/div/div/div/div/div[2]/p/a').click()

    //Cadastrando um beneficiario

    cy.get('#nome').type('Mario Jose Da Silva')
    cy.get('#apelido').type('Jose')
    cy.get('#nascimento').type('1977-08-23')
    cy.get('#rg').type('123456')
    cy.get('#orgaoemissor').type('SSP')
    cy.get('#ufemissor').select('PB')
    cy.get('#ufemissor').should('have.value', 'PB')
    cy.get('#cpf').type('12398754688')
    cy.get('#nis').type('24281791128')
    cy.get('#estadocivil').select('Solteiro')
    cy.get('#escolaridade').select('Doutorado')
    cy.xpath('/html/body/div/main/div/div/div/form/div[1]/div[2]/div[9]/div[1]/input').type('4343')
    cy.get('#zona').type('001')
    cy.get('#secao').type('123')
    cy.get('#uftitulo').select('PB')
    cy.get('#tel').type('83987908765')
    cy.xpath('//*[@id="bfsim"]').click()
    cy.get('#valorbf').type('200,00')

    //Endereco

    cy.get('#rua').type('Rua Jose Augusto De Barbosa')
    cy.get('#bairro').type('Mangabeira')
    cy.get('#uf').select('Paraíba')
    cy.get('#cidade').select('João Pessoa')
    cy.get('#cep').type('58000000')
    //Cadastro Beneficiario - Grupo Familiar
    cy.get('#relacao').select('Mãe')
    //Cadastro de Beneficiário - Ocupações
    cy.get('#profissao').type('Professora')
    cy.get('#local').type('João Pessoa')
    cy.get('#renda').type('100,00')
    //Cadastro de Beneficiário - Despesas
    cy.get('#despesadescricao').select('Aluguel')
    cy.get('#valor').type('400,00')
    //Salvar
    cy.xpath('//*[@id="app"]/main/div/div/div/form/div[5]/div/input').click()
 
});

