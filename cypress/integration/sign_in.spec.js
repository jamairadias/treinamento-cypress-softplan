/// <reference types="cypress"/>

describe('Autenticação', () => {
    it('Efetuar login com usuário e senha válidos', () => {
        //acessar o site
        cy.visit('/');

        //clicar no botão Sign in
        cy.get('.nav-link')
          .contains('Sign in')
          .click()  //ou cy.get('[href*=login]') .click()

        //informar o usuário e senha
        const user =  Cypress.env('user').email
        const pass =  Cypress.env('user').senha

        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)

        //clicar no botão entrar
        cy.get('button.btn-primary').click()

        //verificar se você foi autenticado
        //deve conter tamanho 2
        cy.get('.nav-pills a.nav-link')
          .should('have.length', 2)
       
        //deve conter o texto Your Feed
        cy.get('.nav-pills a.nav-link')
          .first() // .eq(0)
          .should('contain.text', 'Your Feed')


    });

});