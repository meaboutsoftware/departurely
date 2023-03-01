import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Logo from "./logo";

describe("Logo", () => {
  it("should render all DOM elements", () => {
    // Arrange

    // Act
    render(<Logo />);

    // Assert
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
