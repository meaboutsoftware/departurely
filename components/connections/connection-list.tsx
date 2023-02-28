import React from "react";
import uuid from "react-uuid";
import ConnectionItem from "./connection-item";
import { ConnectionStopover } from "./connection-stopover";

export type ConnectionListItem = {
  duration: string;
  from: {
    departure: string;
    station: {
      name: string;
    };
  };
  sections: ConnectionStopover[];
  to: {
    arrival: string;
    station: {
      name: string;
    };
  };
  transfers: number;
};

export default function ConnectionList({
  connections,
}: {
  connections: ConnectionListItem[];
}) {
  return (
    <div>
      {connections &&
        connections.map((connection) => (
          <ConnectionItem
            key={uuid()}
            arrivalTime={connection.to.arrival}
            departureTime={connection.from.departure}
            duration={connection.duration}
            from={connection.from.station.name}
            sections={connection.sections}
            to={connection.to.station.name}
            transfers={connection.transfers}
          />
        ))}
    </div>
  );
}
