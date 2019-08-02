describe("Base React Application", () => {
  it("Shows Counter", () => {
    cy.visit("/");
    cy.contains('+1');
  });
});
