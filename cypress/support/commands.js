Cypress.Commands.add("navigateToLoginForm", () => {
  cy.get("#registerForm").parent().find('[data-auth="login"]').click();
  cy.wait(500);
});

Cypress.Commands.add("loginWithCredentials", (email, password) => {
  cy.intercept({
    method: "POST",
    url: "**/api/v1/social/auth/login",
  }).as("loginWithCredentials");
  cy.get("#loginEmail").type(email);
  cy.get("#loginPassword").type(password);
  cy.get("#loginForm").submit();
});

Cypress.Commands.add("login", (url, email, password) => {
  cy.visit(url);
  cy.wait(500);
  cy.get("#registerForm").should("be.visible");
  cy.navigateToLoginForm();
  cy.loginWithCredentials(email, password);
  cy.wait("@loginWithCredentials").its("response.statusCode").should("eq", 200);
  cy.intercept({
    method: "GET",
    url: "**/api/v1/social/profiles/**?&_followers=true&_posts=true&_following=true",
  }).as("login");
});
