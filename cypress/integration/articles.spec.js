// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */


describe('Artigos', () => {

  it('Criar um novo artigo', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.login()

    //Criar um novo artigo
    cy.get('a[href$=editor]').click();
    cy.get('input[placeholder="Article title"]').type('Novo artigo');
    cy.get('input[placeholder="What is this article about?"]').type('teste cypress');
    cy.get('form textarea').type('teste com cypress studio');
    cy.get('input[placeholder="Enter tags"]').type('cypress');
    cy.get('button.btn-primary').contains('Publish article').click();

    //validar a inclusão do artigo
    cy.get('h1').should('contain.text', 'Novo artigo');

    /* ==== End Cypress Studio ==== */
  });
});
