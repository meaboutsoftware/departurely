import React from "react";

type ConnectionOverview = {
  arrivalTime: string;
  departureTime: string;
  duration: string;
  transfers: number;
};

export default function ConnectionItemOverview({
  arrivalTime,
  departureTime,
  duration,
  transfers,
}: ConnectionOverview) {
  return (
    <div data-testid="item-overview">
      <div data-testid="item-overview-departure-time">
        Departure time: {departureTime}
      </div>
      <div data-testid="item-overview-arrival-time">
        Arrival time: {arrivalTime}
      </div>
      <div data-testid="item-overview-duration">Duration: {duration}</div>
      <div data-testid="item-overview-stopovers">
        Number of stopovers: {transfers}
      </div>
      <br />
    </div>
  );
}
