import React from "react";
import { BirthCertiIcon } from "./birthCerti";

describe("<BirthCertiIcon />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BirthCertiIcon />);
  });
});
