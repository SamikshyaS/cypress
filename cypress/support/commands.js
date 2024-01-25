import * as dotenv from "dotenv";

dotenv.config();

const config = {
  username: process.env.USERNAME || "dev",
  password: process.env.PASSWORD || "dev",
};

Cypress.Commands.add("login", () => {
  const username = config.username;
  cy.log(username);
  const password = config.password;
  cy.log(password);

  cy.visit("https://dev.laudio.io/login");
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[class="btn btn--primary btn--block"]').click();
  cy.wait(4000);
  cy.intercept("POST", "https://api.dev.laudio.io/auth/login").as("login");
  cy.wait("@login");
});
Cypress.Commands.add("navigateToSendMessage", (textToClick) => {
  cy.contains(textToClick).click();
  cy.get("#actionItemDropdownId").find("li").first().click();
});

Cypress.Commands.add("selectGroup", () => {
  cy.get(
    'button[class="ml--10 flex--center line-height--18 modal-action-item"]'
  ).click();
  cy.get("#employee-group-dropdown-scrollbar").find("li").first().click();
});

Cypress.Commands.add("enterSubject", () => {
  cy.get(
    'input[class="form-input--lg border--none border-radius--0 border-bottom--input-field form-input"]'
  ).type("Welcome to the Team bro");
});
