/* eslint-disable no-nested-ternary */
import ConnectionList, {
  ConnectionListItem,
} from "@/components/connections/connection-list";
import NoResults from "@/components/ui/no-results";
import Spinner from "@/components/ui/spinner";
import getSearchResults from "@/utils/api";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Connections() {
  const router = useRouter();
  const [isInProgress, setIsInProgress] = useState(false);
  const [loadedConnections, setLoadedConnections] = useState<
    ConnectionListItem[]
  >([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState(false);
  const { from, to } = router.query;

  function loadMoreConnectionsHandler() {
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    setIsInProgress(true);

    if (!router.isReady) {
      return;
    }

    getSearchResults(from, to, currentPage)
      .then((data) => {
        setLoadedConnections([...loadedConnections, ...data.connections]);
        setIsInProgress(false);
      })
      .catch(() => {
        setIsInProgress(false);
        setError(true);
      });
  }, [router.isReady, currentPage]);

  if (error) {
    return <NoResults />;
  }

  return (
    <>
      <Head>
        <title>Your Connections In Switzerland</title>
        <meta
          name="description"
          content="Look at timetable and routes. Do not forget to buy a ticket for a train"
        />
      </Head>
      <h1
        data-testid="connections-header"
        className="mt-10 mb-10 text-3xl text-center"
      >
        {from} {"->"} {to}
      </h1>
      {loadedConnections.length > 0 ? (
        <>
          <ConnectionList connections={loadedConnections} />
          <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <button
              className={`w-3/5 px-20 py-2 mt-6 text-white bg-teal-500 hover:bg-teal-700 rounded-lg ${
                isInProgress
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
              data-testid="load-more"
              type="button"
              onClick={loadMoreConnectionsHandler}
              disabled={isInProgress}
            >
              Load more
            </button>
          </div>
        </>
      ) : isInProgress ? (
        <Spinner />
      ) : (
        <NoResults />
      )}
    </>
  );
}
