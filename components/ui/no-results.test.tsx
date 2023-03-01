import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoResults from "./no-results";

describe("NoResults", () => {
  it("should display message when there are no results", () => {
    // Arrange

    // Act
    render(<NoResults />);

    // Assert
    const titleElement = screen.getByText("No results found");
    const messageElement = screen.getByText(
      "It was not possible find any results matching your search criteria."
    );
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
