import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home", () => {
  it("renders child component", () => {
    render(<Home />);

    const searchForm = screen.getByTestId("search-form");

    expect(searchForm).toBeInTheDocument();
  });
});
