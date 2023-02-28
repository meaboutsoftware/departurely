import React from "react";
import uuid from "react-uuid";
import { ConnectionStopover } from "./connection-stopover";

type ConnectionDetails = {
  arrivalTime: string;
  departureTime: string;
  from: string;
  sections: ConnectionStopover[];
  to: string;
};

export default function ConnectionItemDetails({
  arrivalTime,
  departureTime,
  from,
  sections,
  to,
}: ConnectionDetails) {
  return (
    <div data-testid="item-details">
      <div data-testid="item-details-from">From: {from} </div>
      <div data-testid="item-details-to">To: {to}</div>
      <div data-testid="item-details-departure-time">
        Departure time: {departureTime}
      </div>
      <div data-testid="item-details-arrival-time">
        Arrival time: {arrivalTime}
      </div>
      <table className="border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
              Transport number
            </th>
            <th className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
              Departure
            </th>
            <th className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
              Track
            </th>
            <th className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
              Arrival
            </th>
            <th className="btext-left py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
              Track
            </th>
          </tr>
        </thead>
        {sections.map((section) => {
          return (
            section.journey && (
              <tbody>
                <tr
                  key={uuid()}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-2 px-4 text-center bg-gray-200">
                    {section.journey.category} {section.journey.number}
                  </td>
                  <td className="py-2 px-4 text-center bg-gray-200">
                    {section.departure.station.name}
                  </td>
                  <td className="py-2 px-4 text-center bg-gray-200">
                    {section.departure.platform}
                  </td>
                  <td className="py-2 px-4 text-center bg-gray-200">
                    {section.arrival.station.name}
                  </td>
                  <td className="py-2 px-4 text-center bg-gray-200">
                    {section.arrival.platform}
                  </td>
                </tr>
              </tbody>
            )
          );
        })}
      </table>
      <br />
    </div>
  );
}
