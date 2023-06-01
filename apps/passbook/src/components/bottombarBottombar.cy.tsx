import React from "react";
import { Bottombar } from "./bottombar";

describe("<Bottombar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Bottombar />);
  });
});
