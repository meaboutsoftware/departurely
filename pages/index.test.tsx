import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from ".";

// eslint-disable-next-line global-require, import/no-extraneous-dependencies, unicorn/prefer-module
jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  it("renders child component", () => {
    render(<Home />);

    const searchForm = screen.getByTestId("search-form");

    expect(searchForm).toBeInTheDocument();
  });
});
