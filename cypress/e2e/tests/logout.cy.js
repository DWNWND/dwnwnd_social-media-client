// from the CA requirements:
// The user can log out with the logout button

import {
  testUrl,
  validEmail,
  validPassword,
} from "../../support/testCredentials.js";

describe("logout functionality", () => {
  beforeEach(() => {
    cy.login(testUrl, validEmail, validPassword);
  });

  it("logs the user out by clicking the logout button", () => {
    cy.get('[data-auth="logout"]')
      .contains("Logout")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
