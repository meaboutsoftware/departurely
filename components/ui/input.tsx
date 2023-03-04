import React, { ChangeEventHandler } from "react";

type InputProperties = {
  testId: string;
  errorMessage: string;
  hasError: boolean;
  placeholder: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function InputField({
  testId,
  errorMessage,
  hasError,
  placeholder,
  type,
  value,
  onChange,
}: InputProperties) {
  return (
    <>
      <input
        data-testid={testId}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
          hasError ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {hasError && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}
    </>
  );
}
