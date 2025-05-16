//<reference typess="cypress" />;

describe("Fucionalidade: Produtos", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });

  it("Deve selecionar um produto de lista", () => {
    cy.get('.post-2559 > .product-block')
      //.first()
      //.last()
      //.eq(2)
      .click();
      cy.get('#tab-title-description > a').should('contain', ("Descrição"))
  });
});
