import React from "react";
import ConnectionItemDetails from "./connection-item-details";
import ConnectionItemOverview from "./connection-item-overview";
import { ConnectionStopover } from "./connection-stopover";
import { formatDuration, formatTime } from "./time-formatter";

type Connection = {
  arrivalTime: string;
  departureTime: string;
  duration: string;
  sections: ConnectionStopover[];
  transfers: number;
};

export default function ConnectionItem({
  arrivalTime,
  departureTime,
  duration,
  sections,
  transfers,
}: Connection) {
  const formattedArrivalTime = formatTime(arrivalTime);
  const formattedDepartureTime = formatTime(departureTime);
  const formattedDuration = formatDuration(duration);

  return (
    <div
      className="bg-gray-300 shadow-md rounded-md p-4 mx-20"
      data-testid="item"
    >
      <ConnectionItemOverview
        test-dataId="item-overview"
        arrivalTime={formattedArrivalTime}
        departureTime={formattedDepartureTime}
        duration={formattedDuration}
        transfers={transfers}
      />
      <ConnectionItemDetails test-dataId="item-details" sections={sections} />
    </div>
  );
}
