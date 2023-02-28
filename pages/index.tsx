import React from "react";
import Head from "next/head";
import SearchForm from "@/components/home/search-form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Departurely</title>
        <meta
          name="description"
          content="Your new way to find connections between trains in Switzerland"
        />
      </Head>
      <SearchForm />
    </>
  );
}
