/// <reference types="cypress" />

describe("login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders login pages", () => {
    cy.get("#__next > div > div.flex.justify-center.mt-5.flex-col > h1").should(
      "have.text",
      "आधार संख्या दर्ज करें"
    );
    cy.root().find("button").should("have.text", "लॉग इन करें");
  });
});

export {};
