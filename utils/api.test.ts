import "@testing-library/jest-dom";
import getSearchResults from "./api";

describe("getSearchResults()", () => {
  const fromLocation = "Wil";
  const toLocation = "Lausanne";
  const invalidInput = "Invalid input";

  it("should throw an error when 'from' parameter is undefined", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults(undefined, toLocation, 1)).toThrow(
      invalidInput
    );
  });

  it("should throw an error when 'to' parameter is undefined", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults(fromLocation, undefined, 1)).toThrow(
      invalidInput
    );
  });

  it("should throw an error when 'from' parameter is not a string", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults([], toLocation, 1)).toThrow(invalidInput);
  });

  it("should throw an error when 'to' parameter is not a string", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults(fromLocation, [], 1)).toThrow(invalidInput);
  });

  it("should call 'fetch' 'with the correct URL", () => {
    // Arrange
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({ status: 200, json: () => Promise.resolve({}) })
    );

    // Act
    getSearchResults(fromLocation, toLocation, 1);

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(
      "./api/search?from=Wil&to=Lausanne&page=1&limit=5"
    );
  });

  it("should return the correct data", async () => {
    // Arrange
    const connectionData = "connection data";
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ data: connectionData }),
      })
    );
    // Act
    const result = await getSearchResults(fromLocation, toLocation, 1);

    // Assert
    expect(result).toEqual({ data: connectionData });
  });

  it("should throw an error when the response status is not 200", async () => {
    // Arrange
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({ status: 400 })
    );

    // Act
    // Assert
    await expect(getSearchResults(fromLocation, toLocation, 1)).rejects.toThrow(
      "Invalid response"
    );
  });
});
