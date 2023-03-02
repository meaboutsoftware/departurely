import React from "react";

export default function Spinner() {
  return (
    <div
      data-testid="spinner"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="w-20 h-20 bg-teal-500 rounded-lg animate-spin" />
    </div>
  );
}
