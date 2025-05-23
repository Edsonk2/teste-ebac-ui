//<reference typess="cypress" />;

const perfil = require("../../fixtures/perfil.json");

describe("Fucionalidade: Login", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer login com sucesso", () => {
    cy.get("#username").type("edsonbrasiloliveira3@gmail.com");
    cy.get("#password").type("323250@@");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, edsonbrasiloliveira3 (não é edsonbrasiloliveira3? Sair"
    );
  });

  it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
    cy.get("#username").type("edsonbrasiloliveira@gmail.com");
    cy.get("#password").type("323250@@");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-error > li").should("exist");
  });

  it("Deve exiber uma mensagem de erro ao inserir senha inválida", () => {
    cy.get("#username").type("edsonbrasiloliveira3@gmail.com");
    cy.get("#password").type("3232500@@");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-error > li").should(
      "contain",
      "Erro: A senha fornecida para o e-mail edsonbrasiloliveira3@gmail.com está incorreta. Perdeu a senha?"
    );
    cy.get(".woocommerce-error > li").should("exist");
  });

  it("Deve fazer login com sucesso - Usando massa de dados", () => {
    cy.get("#username").type(perfil.usuario);
    cy.get("#password").type(perfil.senha);
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, edsonbrasiloliveira3 (não é edsonbrasiloliveira3? Sair"
    );
  });
  it("Deve fazer login com sucesso - Usando Fixture", () => {
    cy.fixture("perfil").then((dados) => {
      cy.get("#username").type(dados.usuario, { log: false });
      cy.get("#password").type(dados.senha, { log: false });
      cy.get(".woocommerce-form > .button").click();
      cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
        "contain",
        "Olá, edsonbrasiloliveira3 (não é edsonbrasiloliveira3? Sair"
      );
    });
  });
  it.only("Deve fazer login com sucesso - usando Comandos constumizado", () => {
    cy.login("edsonbrasiloliveira3@gmail.com", "323250@@");
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, edsonbrasiloliveira3 (não é edsonbrasiloliveira3? Sair"
    );
  });
});
