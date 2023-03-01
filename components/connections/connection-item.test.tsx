import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionItem from "./connection-item";

describe("ConnectionItem", () => {
  it("renders children components", () => {
    // Arrange

    // Act
    render(
      <ConnectionItem
        arrivalTime="09:46"
        departureTime="08:58"
        duration="00d11:42:00"
        sections={[]}
        transfers={2}
      />
    );

    // Assert
    const itemDetails = screen.getByTestId("item-details");
    const itemOverview = screen.getByTestId("item-overview");

    expect(itemDetails).toBeInTheDocument();
    expect(itemOverview).toBeInTheDocument();
  });
});
