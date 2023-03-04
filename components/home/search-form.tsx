import { isLocationValid } from "@/utils/location-validator";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "@/components/ui/button";
import InputField from "@/components/ui/input";

export default function SearchForm() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState(false);

  const [to, setTo] = useState("");
  const [toError, setToError] = useState(false);

  const onFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (isLocationValid(input)) {
      setFromError(false);
    } else {
      setFromError(true);
    }

    setFrom(event.target.value);
  };

  const onToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (isLocationValid(input)) {
      setToError(false);
    } else {
      setToError(true);
    }

    setTo(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLocationValid(from) && isLocationValid(to)) {
      router.push({
        pathname: "/connections",
        query: { from, to },
      });
    } else {
      setFromError(!isLocationValid(from));
      setToError(!isLocationValid(to));
    }
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
            <div className="mt-4">
              <InputField
                testId="search-form-from"
                errorMessage="Please enter a valid From location"
                hasError={fromError}
                placeholder="From"
                type="text"
                value={from}
                onChange={onFromChange}
              />
            </div>

            <div className="mt-4">
              <InputField
                testId="search-form-to"
                errorMessage="Please enter a valid To location"
                hasError={toError}
                placeholder="To"
                type="text"
                value={to}
                onChange={onToChange}
              />
            </div>
          </div>
          <div>
            <Button
              testId="search-form-submit"
              className="w-full"
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
