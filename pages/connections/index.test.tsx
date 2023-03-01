import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from "next/router";
import getSearchResults from "./api";
import Connections from ".";

jest.mock("./api");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Connections", () => {
  beforeEach(() => {
    (getSearchResults as jest.Mock).mockClear();
  });

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      isReady: true,
      query: {
        from: "Wil",
        to: "Lausanne",
      },
    });
  });

  const connections = [
    {
      duration: "00d01:00:00",
      from: {
        departure: "2012-03-31T08:58:00+02:00",
      },
      sections: [],
      to: {
        arrival: "2012-03-31T09:58:00+02:00",
      },
      transfers: 2,
    },
    {
      duration: "00d02:00:00",
      from: {
        departure: "2012-03-31T10:58:00+02:00",
      },
      sections: [],
      to: {
        arrival: "2012-03-31T12:58:00+02:00",
      },
      transfers: 3,
    },
  ];

  it("should render a loading message when connections are being loaded", () => {
    // Arrange
    (getSearchResults as jest.Mock).mockResolvedValue({ connections: [] });

    // Act
    render(<Connections />);

    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render a loading message when connections fail to load", async () => {
    // Arrange
    (getSearchResults as jest.Mock).mockImplementation(() =>
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject("error")
    );

    // Act
    render(<Connections />);

    // Assert
    expect(
      await screen.findByText("It was not possible to load connections...")
    ).toBeInTheDocument();
  });

  it("should render a list of connections when they are loaded", async () => {
    // Arrange
    (getSearchResults as jest.Mock).mockResolvedValue({ connections });

    // Act
    render(<Connections />);

    // Assert
    const connectionList = await screen.findByTestId("items-list");
    expect(connectionList).toBeInTheDocument();
  });

  it("should render a 'Load more' button that calls the loadMoreConnectionsHandler function when clicked", async () => {
    // Arrange
    const getSearchResultsMock = getSearchResults as jest.Mock;
    (getSearchResultsMock as jest.Mock).mockResolvedValue({ connections });

    // Act
    render(<Connections />);

    getSearchResultsMock.mockResolvedValue({ connections: [] });
    const button = await screen.findByTestId("load-more");
    button.click();

    // Assert
    await waitFor(() => expect(getSearchResults).toHaveBeenCalledTimes(2));
  });
});
