//< reference types="cypress"/>

describe('Fucionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
        cy.login(login.usuario, login.senha)
        })
      
    });

it('Deve copletar detalhes da conta com sucesso', () => {
    cy.detalhesConta('edson', 'paulo', 'edson.qa')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});

});