export type ConnectionStopover = {
  arrival: ConnectionStopoverDetails;
  departure: ConnectionStopoverDetails;
  journey: {
    category: string;
    number: string;
  };
};

export type ConnectionStopoverDetails = {
  arrival: string;
  departure: string;
  platform: number;
  station: {
    name: string;
  };
};
