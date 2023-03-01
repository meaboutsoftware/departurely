import "@testing-library/jest-dom";
import { formatDuration, formatTime } from "./time-formatter";

describe("TimeFormatter", () => {
  describe("formatTime()", () => {
    it("formats given time that is in parseable format to HH:MM", () => {
      // Arrange
      const notFormattedTime = "2012-03-31T08:58:00+02:00";

      // Act
      const formattedTime = formatTime(notFormattedTime);

      // Assert
      expect(formattedTime).toEqual("08:58 AM");
    });

    it("returns invalid date when given time is not in parseable format", () => {
      // Arrange
      const notFormattedTime = "HelloWorld";

      // Act
      const formattedTime = formatTime(notFormattedTime);

      // Assert
      expect(formattedTime).toEqual("Invalid Date");
    });
  });

  describe("formatDuration()", () => {
    it("formats given duration to 'xh ymin(s)' when given duration contains hours and minutes", () => {
      // Arrange
      const notFormattedDuration = "00d04:32:00";

      // Act
      const formattedDuration = formatDuration(notFormattedDuration);

      // Assert
      expect(formattedDuration).toEqual("4h 32min(s)");
    });

    it("formats given duration to 'xh' when given duration contains only days", () => {
      // Arrange
      const notFormattedDuration = "01d00:00:00";

      // Act
      const formattedDuration = formatDuration(notFormattedDuration);

      // Assert
      expect(formattedDuration).toEqual("24h");
    });

    it("formats given duration to 'xh' when given duration contains only hours", () => {
      // Arrange
      const notFormattedDuration = "00d04:00:00";

      // Act
      const formattedDuration = formatDuration(notFormattedDuration);

      // Assert
      expect(formattedDuration).toEqual("4h");
    });

    it("formats given duration to 'xmin(s)' when given duration contains only minutes", () => {
      // Arrange
      const notFormattedDuration = "00d00:41:00";

      // Act
      const formattedDuration = formatDuration(notFormattedDuration);

      // Assert
      expect(formattedDuration).toEqual("41min(s)");
    });

    it("returns invalid duration when given duration is not in parseable format", () => {
      // Arrange
      const notFormattedDuration = "HelloWorld";

      // Act
      const formattedDuration = formatDuration(notFormattedDuration);

      // Assert
      expect(formattedDuration).toEqual("Invalid Duration");
    });
  });
});
