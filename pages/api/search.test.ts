import "@testing-library/jest-dom";
import { createMocks } from "node-mocks-http";
import type { NextApiRequest, NextApiResponse } from "next";
import handler from "./search";

function mockCall() {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks();

  return { req, res };
}

describe("search", () => {
  it("should return a 405 when HTTP method is POST", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "0", limit: "1" };
    req.method = "POST";

    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  it("should return a 405 when HTTP method is PUT", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "0", limit: "1" };
    req.method = "PUT";

    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  it("should return a 405 when HTTP method is PATCH", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "0", limit: "1" };
    req.method = "PATCH";

    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  it("should return a 405 when HTTP method is DELETE", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "0", limit: "1" };
    req.method = "DELETE";

    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  it("should return a 400 when 'from' is not defined", async () => {
    const { req, res } = mockCall();
    req.query = { from: "", to: "Lausanne", page: "0", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'to' is not defined", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "", page: "0", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'page' is not defined", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'limit' is not defined", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "0", limit: "" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'from' is not a string", async () => {
    const { req, res } = mockCall();
    req.query = { from: [], to: "Lausanne", page: "0", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'to' is not a string", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: [], page: "0", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'page' is not a string", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: [], limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 400 when 'limit' is not a string", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: "Lausanne", page: "0", limit: [] };

    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should return a 422 when 'from' is whitespace", async () => {
    const { req, res } = mockCall();
    req.query = { from: " ", to: "Lausanne", page: "0", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(422);
  });

  it("should return a 422 when 'to' is whitespace", async () => {
    const { req, res } = mockCall();
    req.query = { from: "Wil", to: " ", page: "0", limit: "1" };

    await handler(req, res);

    expect(res.statusCode).toBe(422);
  });
});
