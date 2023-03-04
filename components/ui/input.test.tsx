/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InputField from "./input";

describe("InputField", () => {
  const defaultProps = {
    testId: "test-id",
    errorMessage: "Test error",
    hasError: false,
    placeholder: "Test placeholder",
    type: "Test text",
    value: "",
    onChange: jest.fn(),
  };

  it("should render input field with the correct values", () => {
    // Arrange

    // Act
    render(<InputField {...defaultProps} />);

    // Assert
    const input = screen.getByTestId(defaultProps.testId);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", defaultProps.placeholder);
    expect(input).toHaveAttribute("type", defaultProps.type);
    expect(input).toHaveValue(defaultProps.value);
  });

  it("should render error message when hasError is true", () => {
    // Arrange

    // Act
    render(<InputField {...defaultProps} hasError />);

    // Assert
    const errorMessage = screen.getByText(defaultProps.errorMessage);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should call the onChange when input value is changed", () => {
    // Arrange

    // Act
    render(<InputField {...defaultProps} />);
    const input = screen.getByTestId(defaultProps.testId);

    // Assert
    const inputValue = "Test value";
    fireEvent.change(input, { target: { value: inputValue } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
