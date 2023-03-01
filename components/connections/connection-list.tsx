import React from "react";
import uuid from "react-uuid";
import ConnectionItem from "./connection-item";
import { ConnectionStopover } from "./connection-stopover";

export type ConnectionListItem = {
  duration: string;
  from: {
    departure: string;
  };
  sections: ConnectionStopover[];
  to: {
    arrival: string;
  };
  transfers: number;
};

export default function ConnectionList({
  connections,
}: {
  connections: ConnectionListItem[];
}) {
  return (
    <div className="grid grid-cols-1 gap-10" data-testid="items-list">
      {connections &&
        connections.map((connection) => (
          <ConnectionItem
            key={uuid()}
            arrivalTime={connection.to.arrival}
            departureTime={connection.from.departure}
            duration={connection.duration}
            sections={connection.sections}
            transfers={connection.transfers}
          />
        ))}
    </div>
  );
}
