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
      <div className="flex flex-row">
        <div
          className="basis-1/4 text-2xl text-center"
          data-testid="item-overview-departure-time"
        >
          {departureTime}
        </div>
        <div
          className="basis-1/4 text-center"
          data-testid="item-overview-stopovers"
        >
          {transfers}
        </div>
        <div
          className="basis-1/4 text-2xl text-center"
          data-testid="item-overview-arrival-time"
        >
          {arrivalTime}
        </div>
        <div
          className="basis-1/4 text-center"
          data-testid="item-overview-duration"
        >
          Duration: {duration}
        </div>
      </div>
      <br />
    </div>
  );
}
