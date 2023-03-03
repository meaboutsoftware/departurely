import { isLocationValid } from "@/utils/location-validator";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "@/components/ui/button";

function isInputValid(input: string) {
  return input !== "" && isLocationValid(input);
}

export default function SearchForm() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState(false);

  const [to, setTo] = useState("");
  const [toError, setToError] = useState(false);

  const onFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (isInputValid(input)) {
      setFromError(false);
    } else {
      setFromError(true);
    }

    setFrom(event.target.value);
  };

  const onToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (isInputValid(input)) {
      setToError(false);
    } else {
      setToError(true);
    }

    setTo(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push({
      pathname: "/connections",
      query: { from, to },
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      data-testid="search-form"
    >
      <div className="px-8 py-6 mt-4 w-1/2 text-left bg-gray-300 shadow-lg border rounded-md">
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
              {fromError && (
                <div className="text-red-500 text-sm mt-2">
                  Please enter a valid From location
                </div>
              )}
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
              {toError && (
                <div className="text-red-500 text-sm mt-2">
                  Please enter a valid To location
                </div>
              )}
            </div>
          </div>
          <div>
            <Button
              testId="search-form-submit"
              className={`w-full ${
                fromError || toError
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
              disabled={fromError || toError}
              text="Search"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
