import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionItemDetails from "./connection-item-details";

describe("ConnectionItemDetails", () => {
  it("renders all DOM elements when all values are defined", () => {
    render(<ConnectionItemDetails sections={[]} />);

    const itemDetails = screen.getByTestId("item-details");

    expect(itemDetails).toBeInTheDocument();
  });
});
