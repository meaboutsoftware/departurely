import React from "react";
import uuid from "react-uuid";
import { ConnectionStopover } from "./connection-stopover";
import { formatTime } from "./time-formatter";

type ConnectionDetails = {
  arrivalTime: string;
  departureTime: string;
  from: string;
  sections: ConnectionStopover[];
  to: string;
  transfers: number;
};

export default function ConnectionItemDetails({
  arrivalTime,
  departureTime,
  from,
  sections,
  to,
  transfers,
}: ConnectionDetails) {
  return (
    <section>
      <div data-testId="item-details-from">From: {from} </div>
      <div data-testId="item-details-to">To: {to}</div>
      <div data-testId="item-details-departure-time">
        Departure time: {departureTime}
      </div>
      <div data-testId="item-details-arrival-time">
        Arrival time: {arrivalTime}
      </div>
      <div data-testId="item-details-stopovers">
        Number of stopovers: {transfers}
      </div>
      <ul>
        {sections.map((section) => {
          return (
            section.journey && (
              <li key={uuid()}>
                {section.journey.category} {section.journey.number} - Departure:{" "}
                {section.departure.station.name}, Track:{" "}
                {section.departure.platform}{" "}
                {formatTime(section.departure.departure)} Arrival:{" "}
                {section.arrival.station.name}, Track:{" "}
                {section.arrival.platform} {formatTime(section.arrival.arrival)}
              </li>
            )
          );
        })}
      </ul>
      <br />
    </section>
  );
}
