import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionItemDetails from "./connection-item-details";
import { ConnectionStopover } from "./connection-stopover";

describe("ConnectionItemDetails", () => {
  it("renders table with values when there are stopovers", () => {
    // Arrange
    const stopovers: ConnectionStopover[] = [
      {
        journey: { category: "Train", number: "123" },
        departure: {
          arrival: "2022-01-01T10:00:00.000Z",
          station: { name: "Station A" },
          departure: "2022-01-01T10:00:00.000Z",
          platform: 3,
        },
        arrival: {
          arrival: "2022-01-01T11:00:00.000Z",
          station: { name: "Station B" },
          departure: "2022-01-01T11:00:00.000Z",
          platform: 4,
        },
      },
      {
        journey: { category: "Train", number: "456" },
        departure: {
          arrival: "2022-01-01T12:00:00.000Z",
          station: { name: "Station B" },
          departure: "2022-01-01T12:00:00.000Z",
          platform: 5,
        },
        arrival: {
          arrival: "2022-01-01T13:00:00.000Z",
          station: { name: "Station C" },
          departure: "2022-01-01T13:00:00.000Z",
          platform: 6,
        },
      },
    ];

    // Act
    render(<ConnectionItemDetails sections={stopovers} />);

    // Assert
    const itemDetails = screen.getByTestId("item-details");
    expect(itemDetails).toBeInTheDocument();

    // Headers
    const itemDepartureHeader = screen.getByTestId("item-departure-header");
    const itemDepartureAtHeader = screen.getByTestId(
      "item-departure-at-header"
    );
    const itemDepartureTrackHeader = screen.getByTestId(
      "item-departure-track-header"
    );
    const itemArrivalHeader = screen.getByTestId("item-arrival-header");
    const itemArrivalAtHeader = screen.getByTestId("item-arrival-at-header");
    const itemArrivalTrackHeader = screen.getByTestId(
      "item-arrival-track-header"
    );
    const itemTransportNumberHeader = screen.getByTestId(
      "item-transport-number-header"
    );

    expect(itemDepartureHeader).toBeInTheDocument();
    expect(itemDepartureAtHeader).toBeInTheDocument();
    expect(itemDepartureTrackHeader).toBeInTheDocument();
    expect(itemArrivalHeader).toBeInTheDocument();
    expect(itemArrivalAtHeader).toBeInTheDocument();
    expect(itemArrivalTrackHeader).toBeInTheDocument();
    expect(itemTransportNumberHeader).toBeInTheDocument();

    // Values
    const itemDepartureValues = screen.getAllByTestId("item-departure-value");
    const itemDepartureAtValues = screen.getAllByTestId(
      "item-departure-at-value"
    );
    const itemDepartureTrackValues = screen.getAllByTestId(
      "item-departure-track-value"
    );
    const itemArrivalValues = screen.getAllByTestId("item-arrival-value");
    const itemArrivalAtValues = screen.getAllByTestId("item-arrival-at-value");
    const itemArrivalTrackValues = screen.getAllByTestId(
      "item-arrival-track-value"
    );
    const itemTransportNumberValues = screen.getAllByTestId(
      "item-transport-number-value"
    );

    // Values
    expect(itemDepartureValues.length).toEqual(2);
    expect(itemDepartureAtValues.length).toEqual(2);
    expect(itemDepartureTrackValues.length).toEqual(2);
    expect(itemArrivalValues.length).toEqual(2);
    expect(itemArrivalAtValues.length).toEqual(2);
    expect(itemArrivalTrackValues.length).toEqual(2);
    expect(itemTransportNumberValues.length).toEqual(2);
  });

  it("renders empty table when there are no stopovers", () => {
    // Arrange
    const stopovers: ConnectionStopover[] = [];

    // Act
    render(<ConnectionItemDetails sections={stopovers} />);

    // Assert
    const itemDetails = screen.getByTestId("item-details");
    expect(itemDetails).toBeInTheDocument();

    // Headers
    const itemDepartureHeader = screen.getByTestId("item-departure-header");
    const itemDepartureAtHeader = screen.getByTestId(
      "item-departure-at-header"
    );
    const itemDepartureTrackHeader = screen.getByTestId(
      "item-departure-track-header"
    );
    const itemArrivalHeader = screen.getByTestId("item-arrival-header");
    const itemArrivalAtHeader = screen.getByTestId("item-arrival-at-header");
    const itemArrivalTrackHeader = screen.getByTestId(
      "item-arrival-track-header"
    );
    const itemTransportNumberHeader = screen.getByTestId(
      "item-transport-number-header"
    );

    expect(itemDepartureHeader).toBeInTheDocument();
    expect(itemDepartureAtHeader).toBeInTheDocument();
    expect(itemDepartureTrackHeader).toBeInTheDocument();
    expect(itemArrivalHeader).toBeInTheDocument();
    expect(itemArrivalAtHeader).toBeInTheDocument();
    expect(itemArrivalTrackHeader).toBeInTheDocument();
    expect(itemTransportNumberHeader).toBeInTheDocument();

    // Values
    const itemDepartureValue = screen.queryByTestId("item-departure-value");
    const itemDepartureAtValue = screen.queryByTestId(
      "item-departure-at-value"
    );
    const itemDepartureTrackValue = screen.queryByTestId(
      "item-departure-track-value"
    );
    const itemArrivalValue = screen.queryByTestId("item-arrival-value");
    const itemArrivalAtValue = screen.queryByTestId("item-arrival-at-value");
    const itemArrivalTrackValue = screen.queryByTestId(
      "item-arrival-track-value"
    );
    const itemTransportNumberValue = screen.queryByTestId(
      "item-transport-number-value"
    );

    expect(itemDepartureValue).toBeNull();
    expect(itemDepartureAtValue).toBeNull();
    expect(itemDepartureTrackValue).toBeNull();
    expect(itemArrivalValue).toBeNull();
    expect(itemArrivalAtValue).toBeNull();
    expect(itemArrivalTrackValue).toBeNull();
    expect(itemTransportNumberValue).toBeNull();
  });
});
