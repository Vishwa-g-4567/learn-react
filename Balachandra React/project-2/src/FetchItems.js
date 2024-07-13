import React from "react";

const FetchItems = ({ fetchItems }) => {
  return (
    <ul className="list-none">
      {fetchItems?.map((fetchItem) => (
        <li className="mb-5" key={fetchItem.id}>
          {JSON.stringify(fetchItem)}
        </li>
      ))}
    </ul>
  );
};

export default FetchItems;
