// from the CA requirements: The user can log in with the login form with valid credentials

describe("example to-do app", () => {
  it("displays a login form and logs in with valid credentials", () => {
    cy.visit("https://dwnwnd.github.io/dwnwnd_social-media-client/");
    cy.wait(500);

    cy.get("#registerForm")
      .should("be.visible")
      .parent()
      .find('[data-auth="login"]')
      .click();

    cy.wait(500);

    cy.get("#loginForm").should("be.visible");

    const testEmail = "v1testthea@noroff.no";
    const testPassword = "test12345";

    cy.get("#loginEmail").type(`${testEmail}`);
    cy.get("#loginPassword").type(`${testPassword}`);
    cy.get("#loginForm").parent().find('[type="submit"]').click();
    cy.wait(1000);

    cy.get('[data-auth="logout"]').contains("Logout").should("be.visible");
  });
});
