import React from "react";

export default function NoResults() {
  return (
    <div
      data-testid="no-results"
      className="flex items-center justify-center h-full"
    >
      <div className="text-center">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          className="w-16 h-16 mx-auto mb-4 stroke-current text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <p className="text-gray-500 text-xl font-medium mb-2">
          No results found
        </p>
        <p className="text-gray-400">
          It was not possible find any results matching your search criteria.
        </p>
      </div>
    </div>
  );
}
