import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

const DEFAULT_PAGE = "0";
const DEFAULT_LIMIT = "5";

function hasOnlyWhitespaces(input: string) {
  return input.trim() === "";
}

function isLocationParameterValid(parameter: string) {
  return /^[A-Za-zÀ-ÿ ]+$/u.test(parameter) && !hasOnlyWhitespaces(parameter);
}

function isPagingParameterValid(parameter: string) {
  return /^\d+$/.test(parameter) && !hasOnlyWhitespaces(parameter);
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed." });

    return;
  }

  const { from, to } = request.query;
  let { page, limit } = request.query;

  if (
    !from ||
    !to ||
    !page ||
    !limit ||
    typeof from !== "string" ||
    typeof to !== "string" ||
    typeof page !== "string" ||
    typeof limit !== "string"
  ) {
    response.status(400).json({ error: "Bad request" });

    return;
  }

  if (!isLocationParameterValid(from) || !isLocationParameterValid(to)) {
    response.status(422).json({ error: "Invalid input" });

    return;
  }

  if (!isPagingParameterValid(page) || !isPagingParameterValid(limit)) {
    page = DEFAULT_PAGE;
    limit = DEFAULT_LIMIT;
  }

  try {
    const apiResponse: AxiosResponse = await axios.get(
      `${process.env.API}/connections?from=${from}&to=${to}&page=${page}&limit=${limit}`
    );
    response.status(200).json(apiResponse.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        response.status(404).json({ error: "Connections not found" });
      }
    } else {
      response.status(500).json({ error: "Something went wrong" });
    }
  }
}
