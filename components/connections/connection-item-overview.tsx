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
    <section>
      <div data-testId="item-overview-departure-time">
        Departure time: {departureTime}
      </div>
      <div data-testId="item-overview-arrival-time">
        Arrival time: {arrivalTime}
      </div>
      <div data-testId="item-overview-duration">Duration: {duration}</div>
      <div data-testId="item-overview-stopovers">
        Number of stopovers: {transfers}
      </div>
      <br />
    </section>
  );
}
