import ConnectionList from "@/components/connections/connection-list";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import getSearchResults from "./api";

export default function Connections() {
  const router = useRouter();
  const [isInProgress, setIsInProgress] = useState(false);
  const [loadedConnections, setLoadedConnections] = useState<unknown[]>([]);
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
    return (
      <section>
        <p>It was not possible to load connections...</p>;
      </section>
    );
  }

  if (isInProgress) {
    return (
      <section>
        <p>Loading...</p>;
      </section>
    );
  }

  return (
    <section>
      <h1 className="mt-10 mb-10 text-3xl text-center">
        {from} {"->"} {to}
      </h1>
      <ConnectionList connections={loadedConnections} />
      <button
        data-testid="load-more"
        type="button"
        onClick={loadMoreConnectionsHandler}
      >
        Load more
      </button>
    </section>
  );
}
