import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionList, { ConnectionListItem } from "./connection-list";

describe("ConnectionList", () => {
  const testConnection = {
    duration: "00d03:42:00",
    from: {
      departure: "2012-03-31T08:58:00+02:00",
    },
    sections: [],
    to: {
      arrival: "2012-03-31T10:40:00+02:00",
    },
    transfers: 2,
  };

  it("renders single connection item when 1 connection is passed", () => {
    // Arrange
    const connections: ConnectionListItem[] = [testConnection];

    // Act
    render(<ConnectionList connections={connections} />);

    // Assert
    const items = screen.getAllByTestId("item");

    expect(items.length).toEqual(1);
  });

  it("renders multiple connection items when multiple connections are passed", () => {
    // Arrange
    const connections: ConnectionListItem[] = [
      testConnection,
      {
        duration: "00d02:22:00",
        from: {
          departure: "2012-03-31T09:58:00+02:00",
        },
        sections: [],
        to: {
          arrival: "2012-03-31T12:20:00+02:00",
        },
        transfers: 0,
      },
    ];

    // Act
    render(<ConnectionList connections={connections} />);

    // Assert
    const items = screen.getAllByTestId("item");

    expect(items.length).toEqual(2);
  });
});
