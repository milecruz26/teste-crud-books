import React from "react";
import { mount } from "cypress/react";
import { AuthorForm } from "../../src/components/author/AuthorForm/AuthorForm";

describe("AuthorForm Component", () => {
  it("should render the form and submit data", () => {
    const onSubmit = cy.stub();
    mount(<AuthorForm onSubmit={onSubmit} button="Adicionar Autor" />);

    cy.get('input[name="name"]').type("Autor Teste");
    cy.get('input[name="email"]').type("autor@teste.com");
    cy.get('button[type="submit"]').click();

    cy.wrap(onSubmit).should("be.calledWith", {
      name: "Autor Teste",
      email: "autor@teste.com",
    });
  });

  it("should display error messages for invalid inputs", () => {
    const onSubmit = cy.stub();
    mount(<AuthorForm onSubmit={onSubmit} button="Adicionar Autor" />);

    cy.get('button[type="submit"]').click();
    cy.contains("O nome é obrigatório").should("be.visible");
  });
});
