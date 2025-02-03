import React from "react";
import { mount } from "cypress/react";
import { BooksForm } from "../../src/components/books/BookForm/BooksForm";

describe("BookForm Component", () => {
  it("should render the form and submit data", () => {
    const onSubmit = cy.stub();
    mount(<BooksForm onSubmit={onSubmit} button="Adicionar Livro" />);

    cy.get('input[name="name"]').type("Livro Teste");
    cy.get('select[name="authorId"]').select("1");
    cy.get('input[name="pages"]').type("200");
    cy.get('button[type="submit"]').click();

    cy.wrap(onSubmit).should("be.calledWith", {
      name: "Livro Teste",
      authorId: 1,
      pages: "200",
    });
  });

  it("should display error messages for invalid inputs", () => {
    const onSubmit = cy.stub();
    mount(<BooksForm onSubmit={onSubmit} button="Adicionar Livro" />);

    cy.get('button[type="submit"]').click();

    cy.contains("O nome do livro é obrigatório").should("be.visible");
    cy.contains("O autor é obrigatório").should("be.visible");
  });
});
