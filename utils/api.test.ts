import "@testing-library/jest-dom";
import getSearchResults from "./api";

describe("getSearchResults()", () => {
  it("should throw an error when 'from' parameter is undefined", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults(undefined, "Lausanne", 1)).toThrow(
      "Invalid input"
    );
  });

  it("should throw an error when 'to' parameter is undefined", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults("Wil", undefined, 1)).toThrow(
      "Invalid input"
    );
  });

  it("should throw an error when 'from' parameter is not a string", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults([], "Lausanne", 1)).toThrow("Invalid input");
  });

  it("should throw an error when 'to' parameter is not a string", () => {
    // Arrange

    // Act
    // Assert
    expect(() => getSearchResults("Wil", [], 1)).toThrow("Invalid input");
  });

  it("should call 'fetch' 'with the correct URL", () => {
    // Arrange
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({ status: 200, json: () => Promise.resolve({}) })
    );

    // Act
    getSearchResults("Wil", "Lausanne", 1);

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(
      "./api/search?from=Wil&to=Lausanne&page=1&limit=5"
    );
  });

  it("should return the correct data", async () => {
    // Arrange
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ data: "connection data" }),
      })
    );
    // Act
    const result = await getSearchResults("Wil", "Lausanne", 1);

    // Assert
    expect(result).toEqual({ data: "connection data" });
  });

  it("should throw an error when the response status is not 200", async () => {
    // Arrange
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({ status: 400 })
    );

    // Act
    // Assert
    await expect(getSearchResults("Wil", "Lausanne", 1)).rejects.toThrow(
      "Invalid response"
    );
  });
});
