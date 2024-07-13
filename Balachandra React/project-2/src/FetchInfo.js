import React from "react";
import FetchItems from "./FetchItems";
import FetchTable from "./FetchTable";
import FetchError from "./FetchError";
import Loading from "./Loading";

const FetchInfo = ({ fetchItems, isLoading, fetchError }) => {
  return (
    <div className="w-full flex items-center justify-center">
      {(isLoading && <Loading />) ||
        (fetchError && <FetchError fetchError={fetchError} />) || (
          <>
            <FetchItems fetchItems={fetchItems} />
            {/* <FetchTable fetchItems={fetchItems} /> */}
          </>
        )}
    </div>
  );
};

export default FetchInfo;
