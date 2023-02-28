import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "./search";

jest.mock("axios");

describe("handler function", () => {
  const response: NextApiResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as NextApiResponse;
  const defaultRequest: NextApiRequest = {
    method: "GET",
    query: {
      from: "Wil",
      to: "Lausanne",
    },
  } as unknown as NextApiRequest;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 if any required query parameter is missing", async () => {
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "0",
      },
    } as unknown as NextApiRequest;

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 if any input is empty", async () => {
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "",
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 405 if HTTP method is not GET", async () => {
    const request: NextApiRequest = {
      method: "POST",
    } as unknown as NextApiRequest;

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(405);
    expect(response.json).toHaveBeenCalledWith({
      error: "Method not allowed.",
    });
  });

  it("should return 422 if any input is whitespace", async () => {
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: " ",
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(422);
    expect(response.json).toHaveBeenCalledWith({ error: "Invalid input" });
  });

  it("should return 500 if there is an unknown error", async () => {
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    (axios.get as jest.Mock).mockRejectedValue(new Error("Unknown error"));

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({
      error: "Something went wrong",
    });
  });

  it("should return the data if all parameters are passed", async () => {
    const mockApiResponse = {
      data: [{ from: "Wil", to: "Lausanne" }],
    };

    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    (axios.get as jest.Mock).mockResolvedValueOnce(mockApiResponse);

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
  });

  it("should return default values for page and limit if they are whitespace", async () => {
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: " ",
        limit: " ",
      },
    } as unknown as NextApiRequest;

    await handler(request, response);

    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.API}/connections?from=Wil&to=Lausanne&page=0&limit=5`
    );
  });
});
