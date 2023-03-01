import React from "react";
import Head from "next/head";
import SearchForm from "@/components/home/search-form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Switzerland Train Connections Schedule</title>
        <meta
          name="description"
          content="Find the fastest train connections in Switzerland. Plan your trip with ease using our Switzerland train connections schedule."
        />
      </Head>
      <SearchForm />
    </>
  );
}
