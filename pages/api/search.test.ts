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

  it("should return 400 when from parameter is missing", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when to parameter is missing", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when page parameter is missing", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when limit parameter is missing", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "0",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when from input is empty", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "",
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when to input is empty", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when page input is empty", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when limit input is empty", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "0",
        limit: "",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when from input is not a string", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: [],
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when to input is not a string", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: [],
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when page input is not a string", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: [],
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 400 when limit input is not a string", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: "",
        limit: [],
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: "Bad request" });
  });

  it("should return 405 when HTTP method is not GET", async () => {
    // Arrange
    const request: NextApiRequest = {
      method: "POST",
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(405);
    expect(response.json).toHaveBeenCalledWith({
      error: "Method not allowed.",
    });
  });

  it("should return 422 when any input is whitespace", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: " ",
        to: "Lausanne",
        page: "0",
        limit: "5",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(422);
    expect(response.json).toHaveBeenCalledWith({ error: "Invalid input" });
  });

  it("should return 500 when there is an unknown error", async () => {
    // Arrange
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

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({
      error: "Something went wrong",
    });
  });

  it("should return the data when all parameters are passed", async () => {
    // Arrange
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

    // Act
    await handler(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(200);
  });

  it("should return default values for page and limit when they are whitespace", async () => {
    // Arrange
    const request: NextApiRequest = {
      ...defaultRequest,
      query: {
        from: "Wil",
        to: "Lausanne",
        page: " ",
        limit: " ",
      },
    } as unknown as NextApiRequest;

    // Act
    await handler(request, response);

    // Assert
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.API}/connections?from=Wil&to=Lausanne&page=0&limit=5`
    );
  });
});
