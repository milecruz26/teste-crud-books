# Desafio FrontEnd - CRUD Autor e Livro

[LINK DO DEPLOY](https://teste-crud-books.vercel.app)

Este projeto é uma aplicação web para gerenciar autores e livros. Ele permite adicionar, visualizar, editar e excluir autores e livros, além de exibir detalhes de cada item. A aplicação foi desenvolvida utilizando **React, TypeScript, Vite, React Hook Form, Zod e Cypress** para testes.

## 🏗️ Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```
/teste-crud-books
│
├── /public
│   ├── favicon.ico
│   └── index.html
│
├── /src
│   ├── /assets
│   │   ├── global.css
│   │
│   ├── /components
│   │   ├── /author
│   │   │   ├── /AuthorCreate
│   │   │   ├── /AuthorDetails
│   │   │   ├── /AuthorEdit
│   │   │   ├── /AuthorForm
│   │   │   └── /AuthorList
│   │   ├── /books
│   │   │   ├── /BookCreate
│   │   │   ├── /BookDetails
│   │   │   ├── /BookEdit
│   │   │   ├── /BookForm
│   │   │   └── /BookList
│   │   ├── /shared
│   │   │   └── /Header
│   │   ├── /ui
│   │   │   ├── /Alert
│   │   │   ├── /Button
│   │   │   ├── /Modal
│   │   │   ├── /TableBase
│   │   │   └── /Toast
│   │
│   ├── /models
│   │   ├── Author.ts
│   │   ├── Book.ts
│   │
│   ├── /schemas
│   │   ├── authorSchema.ts
│   │   ├── bookSchema.ts
│   │
│   ├── /services
│   │   ├── AuthorServices.ts
│   │   ├── BookServices.ts
│   │
│   ├── /view
│   │   ├── /AuthorView
│   │   ├── /BookView
│   │
│   ├── /viewmodels
│   │   ├── /AuthorViewModel
│   │   ├── /BookViewModel
│   │
│   ├── App.tsx
│   ├── main.tsx
│
├── /cypress
│   ├── /componente
│   │   ├── AuthorForm.cy.tsx
│   │   ├── BookForm.cy.tsx
│
├── .dockerignore
├── cypress.config.cjs
├── docker-compose.yml
├── Dockerfile
```

## 🚀 Como Rodar o Projeto Localmente
Siga os passos abaixo para rodar o projeto em sua máquina:

### **Pré-requisitos**
- Node.js (v16 ou superior)
- npm ou yarn

### **Passos**

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
3. **Acesse a aplicação no navegador:**
   ```
   http://localhost:5173
   ```

## 📦 Bibliotecas Utilizadas
As principais bibliotecas e ferramentas utilizadas no projeto:

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Adiciona tipagem estática ao JavaScript.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **React Hook Form**: Biblioteca para gerenciamento de formulários.
- **Zod**: Biblioteca para validação de esquemas.
- **Radix UI**: Biblioteca de componentes acessíveis.
- **Cypress**: Ferramenta para testes end-to-end e de componentes.

Para ver todas as dependências, consulte o arquivo `package.json`.

## 🎨 Imagens do Produto
Aqui estão algumas capturas de tela da aplicação:



