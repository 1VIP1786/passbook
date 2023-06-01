import React from "react";
import { DomicileCertiIcon } from "./domicileCerti";

describe("<DomicileCertiIcon />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DomicileCertiIcon />);
  });
});
