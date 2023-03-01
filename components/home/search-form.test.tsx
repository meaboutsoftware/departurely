import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./search-form";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SearchForm", () => {
  it("renders all DOM elements when all values are defined", () => {
    // Arrange

    // Act
    render(<SearchForm />);

    // Assert
    const from = screen.getByTestId("search-form-from");
    const to = screen.getByTestId("search-form-to");
    const submit = screen.getByTestId("search-form-submit");

    expect(from).toBeInTheDocument();
    expect(to).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});
