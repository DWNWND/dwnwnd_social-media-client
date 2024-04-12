// from the CA requirements:
// The user can log in with the login form with valid credentials
// The user cannot submit the login form with invalid credentials and is shown a message.

import {
  testUrl,
  validEmail,
  validPassword,
  validUsername,
  invalidEmail,
  invalidPassword,
} from "../../support/testCredentials.js";

describe("login functionality", () => {
  beforeEach(() => {
    cy.visit(testUrl);
    cy.wait(500);
    cy.get("#registerForm").should("be.visible");
  });

  it("displays a message if the login function is called with  invalid credentals", () => {
    cy.navigateToLoginForm();
    cy.get("#loginForm").should("be.visible");
    cy.testLoginCredentials(invalidEmail, invalidPassword);
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.contain(
        "Either your username was not found or your password is incorrect"
      );
    });
  });

  it("displays a login form and logs in with valid credentials", () => {
    cy.navigateToLoginForm();
    cy.get("#loginForm").should("be.visible");
    cy.testLoginCredentials(validEmail, validPassword);
    cy.url().should("include", validUsername);
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.exist;
    });
  });
});
