import "@testing-library/jest-dom";
import { formatDuration, formatTime } from "./time-formatter";

describe("TimeFormatter", () => {
  describe("formatTime()", () => {
    it("formats given time that is in parseable format to HH:MM", () => {
      const notFormattedTime = "2012-03-31T08:58:00+02:00";

      const formattedTime = formatTime(notFormattedTime);

      expect(formattedTime).toEqual("08:58 AM");
    });

    it("returns invalid date when given time is not in parseable format", () => {
      const notFormattedTime = "HelloWorld";

      const formattedTime = formatTime(notFormattedTime);

      expect(formattedTime).toEqual("Invalid Date");
    });
  });

  describe("formatDuration()", () => {
    it("formats given duration to 'xh ymin(s)' when given duration contains hours and minutes", () => {
      const notFormattedDuration = "00d04:32:00";

      const formattedDuration = formatDuration(notFormattedDuration);

      expect(formattedDuration).toEqual("4h 32min(s)");
    });

    it("formats given duration to 'xh' when given duration contains only days", () => {
      const notFormattedDuration = "01d00:00:00";

      const formattedDuration = formatDuration(notFormattedDuration);

      expect(formattedDuration).toEqual("24h");
    });

    it("formats given duration to 'xh' when given duration contains only hours", () => {
      const notFormattedDuration = "00d04:00:00";

      const formattedDuration = formatDuration(notFormattedDuration);

      expect(formattedDuration).toEqual("4h");
    });

    it("formats given duration to 'xmin(s)' when given duration contains only minutes", () => {
      const notFormattedDuration = "00d00:41:00";

      const formattedDuration = formatDuration(notFormattedDuration);

      expect(formattedDuration).toEqual("41min(s)");
    });

    it("returns invalid duration when given duration is not in parseable format", () => {
      const notFormattedDuration = "HelloWorld";

      const formattedDuration = formatDuration(notFormattedDuration);

      expect(formattedDuration).toEqual("Invalid Duration");
    });
  });
});
