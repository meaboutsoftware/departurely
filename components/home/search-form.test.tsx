import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./search-form";

// eslint-disable-next-line global-require, import/no-extraneous-dependencies, unicorn/prefer-module
jest.mock("next/router", () => require("next-router-mock"));

describe("SearchForm", () => {
  it("renders all DOM elements when all values are defined", () => {
    render(<SearchForm />);

    const from = screen.getByTestId("search-form-from");
    const to = screen.getByTestId("search-form-to");
    const submit = screen.getByTestId("search-form-submit");

    expect(from).toBeInTheDocument();
    expect(to).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});
