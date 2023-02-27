import React from "react";
import Link from "next/link";
import Logo from "./logo";

export default function TopNavigation() {
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
}
