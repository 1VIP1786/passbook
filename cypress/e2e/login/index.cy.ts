import { loginPageTexts, routes, apiRoutes } from "../../contants";

const apiUrl = Cypress.env("API_URL");
const baseUrl = Cypress.env("BASE_URL");

const { login } = apiRoutes;

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the heading", () => {
    cy.get("#login-heading").should("have.text", loginPageTexts?.heading);
  });

  it("should display the input box", () => {
    cy.get("#login-input-aadhar").should("exist");
  });

  it("should display the login button", () => {
    cy.root().find("#login-button").should("have.text", loginPageTexts?.button);
  });

  it("should display the registration link", () => {
    cy.get("#login-registration-portal").should("exist");
  });

  it("should be able to enter aadhaar number", () => {
    const aadharNumber = loginPageTexts?.validAadharNumber;
    cy.get("#login-input-aadhar")
      .type(aadharNumber)
      .should("have.value", aadharNumber);
  });

  it("should not be able to enter aadhaar number more than 12 digits", () => {
    const invalidAadharNumber = loginPageTexts?.invalidAadharNumber;
    cy.get("#login-input-aadhar")
      .type(invalidAadharNumber)
      .should("have.value", loginPageTexts?.validAadharNumber);
  });

  it("should not be able to enter anything except numbers in Aadhar Number", () => {
    const invalidAadhaarNumber = "abcd1234";
    cy.get("#login-input-aadhar")
      .type(invalidAadhaarNumber)
      .should("have.value", "1234");
  });

  it("should be able to click on Login button", () => {
    cy.get("#login-input-aadhar").type(loginPageTexts?.validAadharNumber);
    cy.contains(loginPageTexts?.button).click();
  });

  // it("If Aadhaar number exists -> Moves to OTP page", () => {
  //   const aadhaarNumber = loginPageTexts?.validAadharNumber;
  //   cy.intercept(
  //     `${login?.method}`,
  //     `${apiUrl}${login?.route}${aadhaarNumber}`
  //   ).as("login");

  //   cy.get("#login-input-aadhar").type(aadhaarNumber);
  //   cy.get("#login-button").click();

  //   cy.wait("@login", { timeout: 15000 });

  //   cy.get("@login")
  //     .its("response")
  //     .then((response) => {
  //       expect(response?.statusCode).to.equal(201);
  //       cy.url().should("include", routes?.otp);
  //     });
  // });

  // it("If Aadhaar number doesn't exist  -> Gets a alert message on screen with a link to direct to registration portal", () => {
  //   const aadhaarNumber = loginPageTexts?.validAadharNumber;
  //   cy.intercept(
  //     `${login?.method}`,
  //     `${apiUrl}${login?.route}${aadhaarNumber}`
  //   ).as("login");

  //   cy.get("#login-input-aadhar").type(aadhaarNumber);
  //   cy.get("#login-button").click();

  //   cy.wait("@login", { timeout: 15000 });

  //   cy.get("@login")
  //     .its("response")
  //     .then((response) => {
  //       expect(response?.statusCode).to.equal(403);
  //       cy.url().should("include", "/");
  //       cy.contains(loginPageTexts?.registrationPortal).should("exist");
  //     });
  // });

  // it("Should be able to click on Registration Portal link", () => {
  //   cy.get("#login-registration-portal-link").click();
  //   cy.url().should("include", "");
  // });
});

export {};
