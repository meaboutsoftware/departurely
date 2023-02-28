import React from "react";
import ConnectionItemDetails from "./connection-item-details";
import ConnectionItemOverview from "./connection-item-overview";
import { ConnectionStopover } from "./connection-stopover";
import { formatDuration, formatTime } from "./time-formatter";

type Connection = {
  arrivalTime: string;
  departureTime: string;
  duration: string;
  from: string;
  sections: ConnectionStopover[];
  to: string;
  transfers: number;
};

export default function ConnectionItem({
  arrivalTime,
  departureTime,
  duration,
  from,
  sections,
  to,
  transfers,
}: Connection) {
  const formattedArrivalTime = formatTime(arrivalTime);
  const formattedDepartureTime = formatTime(departureTime);
  const formattedDuration = formatDuration(duration);

  return (
    <>
      <ConnectionItemOverview
        test-dataId="item-overview"
        arrivalTime={formattedArrivalTime}
        departureTime={formattedDepartureTime}
        duration={formattedDuration}
        transfers={transfers}
      />
      <ConnectionItemDetails
        test-dataId="item-details"
        arrivalTime={formattedArrivalTime}
        departureTime={formattedDepartureTime}
        from={from}
        sections={sections}
        to={to}
        transfers={transfers}
      />
    </>
  );
}
