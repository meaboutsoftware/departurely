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
    <div data-testid="search-form">
      <h1>Search for trains connections</h1>
      <form onSubmit={searchHandler}>
        <div>
          <div>
            <input
              data-testid="search-form-from"
              placeholder="From"
              type="text"
              value={from}
              onChange={onFromChange}
              required
            />
          </div>
          <div>
            <input
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
          <button data-testid="search-form-submit" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
