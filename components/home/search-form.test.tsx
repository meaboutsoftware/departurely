import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./search-form";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SearchForm", () => {
  it("should render all DOM elements when all values are defined", () => {
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

  it("should update 'from' input when user types in it", () => {
    // Arrange

    // Act
    render(<SearchForm />);
    const fromInput = screen.getByTestId("search-form-from");
    fireEvent.change(fromInput, { target: { value: "Wil" } });

    // Assert
    expect(fromInput).toHaveValue("Wil");
  });

  it("should update 'to' input when user types in it", () => {
    // Arrange
    render(<SearchForm />);

    // Act
    const toInput = screen.getByTestId("search-form-to");
    fireEvent.change(toInput, { target: { value: "Lausanne" } });

    // Assert
    expect(toInput).toHaveValue("Lausanne");
  });

  it("should call router.push when form is submitted", () => {
    // Arrange
    const pushMock = jest.fn();
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, unicorn/prefer-module
    const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockImplementation(() => ({
      push: pushMock,
    }));

    // Act
    render(<SearchForm />);
    const fromInput = screen.getByTestId("search-form-from");
    const toInput = screen.getByTestId("search-form-to");
    const submitButton = screen.getByTestId("search-form-submit");

    fireEvent.change(fromInput, { target: { value: "Zürich" } });
    fireEvent.change(toInput, { target: { value: "Genève" } });
    fireEvent.click(submitButton);

    // Assert
    expect(pushMock).toHaveBeenCalledTimes(1);

    useRouterMock.mockRestore();
  });

  const invalidValue = "123";

  it("should display an error message when 'from' input is invalid", () => {
    // Arrange

    // Act
    render(<SearchForm />);
    const fromInput = screen.getByTestId("search-form-from");
    fireEvent.change(fromInput, { target: { value: invalidValue } });
    fireEvent.submit(screen.getByTestId("search-form"));

    // Assert
    expect(
      screen.getByText("Please enter a valid From location")
    ).toBeInTheDocument();
  });

  it("should display an error message when 'to' input is invalid", () => {
    // Arrange

    // Act
    render(<SearchForm />);
    const toInput = screen.getByTestId("search-form-to");
    fireEvent.change(toInput, { target: { value: invalidValue } });
    fireEvent.submit(screen.getByTestId("search-form"));

    // Assert
    expect(
      screen.getByText("Please enter a valid To location")
    ).toBeInTheDocument();
  });
});
