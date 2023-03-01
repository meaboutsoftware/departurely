import ConnectionList, {
  ConnectionListItem,
} from "@/components/connections/connection-list";
import NoResults from "@/components/ui/no-results";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import getSearchResults from "./api";

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

  if (isInProgress) {
    return <Spinner />;
  }

  return (
    <section>
      <h1 className="mt-10 mb-10 text-3xl text-center">
        {from} {"->"} {to}
      </h1>
      {loadedConnections.length > 0 ? (
        <>
          <ConnectionList connections={loadedConnections} />
          <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <button
              className="w-3/5 px-20 py-2 mt-6 text-white bg-teal-500 hover:bg-teal-700 rounded-lg"
              data-testid="load-more"
              type="button"
              onClick={loadMoreConnectionsHandler}
            >
              Load more
            </button>
          </div>
        </>
      ) : (
        <NoResults />
      )}
    </section>
  );
}
