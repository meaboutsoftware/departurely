import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";

describe("Button", () => {
  const buttonText = "Click";
  const buttonTestId = "test-button-id";

  it("should render successfully when all required values are defined", () => {
    // Arrange

    // Act
    render(<Button testId={buttonTestId} text={buttonText} />);

    // Assert
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it("should contain all optional fields with default values when not defined", () => {
    // Arrange
    const defaultClass =
      "py-2 mt-6 text-white bg-teal-500 hover:bg-teal-700 rounded-lg";
    const defaultType = "button";
    const defaultDisabled = false;

    // Act
    render(<Button testId={buttonTestId} text={buttonText} />);

    // Assert
    const button = screen.getByTestId(buttonTestId) as HTMLButtonElement;
    expect(button).toHaveClass(defaultClass);
    expect(button.type).toBe(defaultType);
    expect(button.disabled).toBe(defaultDisabled);
  });

  it("should add additional className when defined", () => {
    // Arrange

    // Act
    render(
      <Button
        testId={buttonTestId}
        text={buttonText}
        className="additional-class"
      />
    );

    // Assert
    const button = screen.getByTestId(buttonTestId);
    expect(button).toHaveClass("additional-class");
  });

  it("should set type when defined", () => {
    // Arrange

    // Act
    render(<Button testId={buttonTestId} text={buttonText} type="submit" />);

    // Assert
    const button = screen.getByTestId(buttonTestId) as HTMLButtonElement;
    expect(button.type).toBe("submit");
  });

  it("should disable button when defined and set to true", () => {
    // Arrange

    // Act
    render(<Button testId={buttonTestId} text={buttonText} disabled />);

    // Assert
    const button = screen.getByTestId(buttonTestId) as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  it("should handle click when onClick", () => {
    // Arrange
    const handleClick = jest.fn();

    // Act
    render(
      <Button testId={buttonTestId} text={buttonText} onClick={handleClick} />
    );

    // Assert
    const button = screen.getByTestId(buttonTestId);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
