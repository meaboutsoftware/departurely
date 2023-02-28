import React from "react";
import Link from "next/link";
import Logo from "./logo";

export default function TopNavigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">
            <Logo />
          </Link>
        </span>
      </div>
    </nav>
  );
}
