import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import TopNavigation from "./top-navigation";

describe("TopNavigation", () => {
  it("should render all DOM elements", () => {
    // Arrange

    // Act
    render(<TopNavigation />);

    // Assert
    const topNavigation = screen.getByTestId("top-navigation");
    expect(topNavigation).toBeInTheDocument();

    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
