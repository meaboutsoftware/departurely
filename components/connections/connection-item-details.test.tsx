import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionItemDetails from "./connection-item-details";

describe("ConnectionItemDetails", () => {
  it("renders all DOM elements when all values are defined", () => {
    render(
      <ConnectionItemDetails
        arrivalTime="09:46"
        departureTime="08:58"
        from="Wil"
        sections={[]}
        to="Lausanne"
        transfers={2}
      />
    );

    const arrivalTime = screen.getByTestId("item-details-arrival-time");
    const departureTime = screen.getByTestId("item-details-departure-time");
    const from = screen.getByTestId("item-details-from");
    const to = screen.getByTestId("item-details-to");
    const transfers = screen.getByTestId("item-details-stopovers");

    expect(arrivalTime).toBeInTheDocument();
    expect(departureTime).toBeInTheDocument();
    expect(from).toBeInTheDocument();
    expect(to).toBeInTheDocument();
    expect(transfers).toBeInTheDocument();
  });
});
