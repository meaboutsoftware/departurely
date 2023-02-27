import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Departurely</title>
        <meta
          name="description"
          content="Your new way to find connections between trains in Switzerland"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello in Departurely</h1>
    </>
  );
}
