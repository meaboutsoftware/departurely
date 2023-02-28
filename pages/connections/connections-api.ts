export default function getSearchResults(
  from: string | string[] | undefined,
  to: string | string[] | undefined,
  currentPage: number
) {
  if (!from || !to || typeof from !== "string" || typeof to !== "string") {
    throw new Error("Invalid input");
  }

  return fetch(
    `./api/search?from=${from}&to=${to}&page=${currentPage}&limit=${5}`
  ).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    }

    throw new Error("Invalid response");
  });
}
