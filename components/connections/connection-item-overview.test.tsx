import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionItemOverview from "./connection-item-overview";

describe("ConnectionItemOverview", () => {
  it("renders all DOM elements when all values are defined", () => {
    render(
      <ConnectionItemOverview
        arrivalTime="09:46"
        departureTime="08:58"
        duration="45 min(s)"
        transfers={2}
      />
    );

    const arrivalTime = screen.getByTestId("item-overview-departure-time");
    const departureTime = screen.getByTestId("item-overview-arrival-time");
    const duration = screen.getByTestId("item-overview-duration");
    const transfers = screen.getByTestId("item-overview-stopovers");

    expect(arrivalTime).toBeInTheDocument();
    expect(departureTime).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
    expect(transfers).toBeInTheDocument();
  });
});
