import React from "react";

export default function Spinner() {
  return (
    <div
      data-testid="spinner"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32" />
    </div>
  );
}
