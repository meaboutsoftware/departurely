import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Layout from "./layout";

describe("Layout", () => {
  it("should render the TopNavigation component", () => {
    // Arrange

    // Act
    render(<Layout>Hello world!</Layout>);

    // Assert
    expect(screen.getByTestId("top-navigation")).toBeInTheDocument();
  });

  it("should render the children components", () => {
    // Arrange

    // Act
    render(<Layout>Hello world!</Layout>);

    // Assert
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
