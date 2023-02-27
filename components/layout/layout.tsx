import React from "react";
import TopNavigation from "./top-navigation";

type LayoutProperties = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProperties) {
  return (
    <>
      <TopNavigation />
      <main>{children}</main>
    </>
  );
}
