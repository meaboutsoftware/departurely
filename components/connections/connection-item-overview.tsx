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
          <svg height="20" width="100%">
            <circle cx="5" cy="15" r="5" fill="black" />
            <line x1="0" y1="15" x2="98%" y2="15" stroke="black" />
            <circle cx="98%" cy="15" r="5" fill="black" />
          </svg>
          Stops: {transfers}
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
