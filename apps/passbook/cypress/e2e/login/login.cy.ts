describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the input box, login button, and registration link", () => {
    cy.get("#__next > div > div.flex.justify-center.mt-5.flex-col > h1").should(
      "have.text",
      "आधार संख्या दर्ज करें"
    );
    cy.get('input[type="number"]').should("exist");
    cy.root().find("button").should("have.text", "लॉग इन करें");
    cy.contains("पंजीकृत नहीं हैं? यहाँ क्लिक करें").should("exist");
  });

  it("should be able to enter Aadhaar number", () => {
    const aadhaarNumber = "123456789012";
    cy.get('input[type="number"]')
      .type(aadhaarNumber)
      .should("have.value", aadhaarNumber);
  });

  it("should not allow entering more than 12 digits in Aadhaar number", () => {
    const invalidAadhaarNumber = "1234567890123";
    // cy.contains("OK").click();
    cy.get('input[type="number"]')
      .type(invalidAadhaarNumber)
      .should("have.value", "123456789012");
  });

  it("should not allow entering non-numeric characters in Aadhaar number", () => {
    const invalidAadhaarNumber = "abcd1234";
    cy.get('input[type="number"]')
      .type(invalidAadhaarNumber)
      .should("have.value", "1234");
  });

  it("should click on Login button", () => {
    cy.get('input[type="number"]').type("123456789012");
    cy.contains("लॉग इन करें").click();
  });
});

export {};
