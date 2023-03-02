import { isLocationValid } from "./location-validator";

describe("isLocationValid()", () => {
  it("should return true when location contains only standard letters", () => {
    // Arrange
    const location = "Wil";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(true);
  });

  it("should return true when location contains German letters", () => {
    // Arrange
    const location = "Zürich";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(true);
  });

  it("should return true when location contains Italian or French letters", () => {
    // Arrange
    const location = "Genève";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(true);
  });

  it("should return true when location contains letters and spaces", () => {
    // Arrange
    const location = "Wil SG";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(true);
  });

  it("should return false when location contains letters and special characters", () => {
    // Arrange
    const location = "Wil!";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(false);
  });

  it("should return false when location contains only special characters", () => {
    // Arrange
    const location = "!";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(false);
  });

  it("should return false when location contains only whitespaces", () => {
    // Arrange
    const location = " ";

    // Act
    // Assert
    expect(isLocationValid(location)).toBe(false);
  });
});
