import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SearchForm() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const onFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  };

  const onToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // I ommitted form validation here - it valdiates with HTML and on the server side

    router.push({
      pathname: "/connections",
      query: { from, to },
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-500"
      data-testid="search-form"
    >
      <div className="px-8 py-6 mt-4 text-left bg-gray-300 shadow-lg border rounded-md">
        <h3 className="text-2xl text-center">Find train connections</h3>
        <form onSubmit={searchHandler}>
          <div className="mt-4">
            <div>
              <input
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                data-testid="search-form-from"
                placeholder="From"
                type="text"
                value={from}
                onChange={onFromChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                data-testid="search-form-to"
                placeholder="To"
                type="text"
                value={to}
                onChange={onToChange}
                required
              />
            </div>
          </div>
          <div>
            <button
              className="w-full py-2 mt-6 text-white bg-teal-500 hover:bg-teal-700 rounded-lg"
              data-testid="search-form-submit"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
