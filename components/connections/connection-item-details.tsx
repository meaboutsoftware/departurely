import React from "react";
import uuid from "react-uuid";
import { formatTime } from "@/utils/time-formatter";
import { ConnectionStopover } from "./connection-stopover";

type ConnectionDetails = {
  sections: ConnectionStopover[];
};

export default function ConnectionItemDetails({ sections }: ConnectionDetails) {
  return (
    <div data-testid="item-details">
      <table className="border-collapse w-full mt-4">
        <thead>
          <tr>
            <th
              data-testid="item-departure-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              Departure
            </th>
            <th
              data-testid="item-departure-at-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              At
            </th>
            <th
              data-testid="item-departure-track-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              Track
            </th>
            <th
              data-testid="item-arrival-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              Arrival
            </th>
            <th
              data-testid="item-arrival-at-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              At
            </th>
            <th
              data-testid="item-arrival-track-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              Track
            </th>
            <th
              data-testid="item-transport-number-header"
              className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200"
            >
              Transport number
            </th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => {
            const formattedArrivalTime = formatTime(section.arrival.arrival);
            const formattedDepartureTime = formatTime(
              section.departure.departure
            );

            return (
              section.journey && (
                <tr
                  key={uuid()}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td
                    data-testid="item-departure-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {section.departure.station.name}
                  </td>
                  <td
                    data-testid="item-departure-at-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {formattedDepartureTime}
                  </td>
                  <td
                    data-testid="item-departure-track-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {section.departure.platform}
                  </td>
                  <td
                    data-testid="item-arrival-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {section.arrival.station.name} {formattedArrivalTime}
                  </td>
                  <td
                    data-testid="item-arrival-at-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {formattedArrivalTime}
                  </td>
                  <td
                    data-testid="item-arrival-track-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {section.arrival.platform}
                  </td>
                  <td
                    data-testid="item-transport-number-value"
                    className="py-2 px-4 text-center bg-gray-200"
                  >
                    {section.journey.category} {section.journey.number}
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
