import React from "react";

const FetchTable = ({ fetchItems }) => {
  return (
    <table className="table-auto">
      <tbody>
        {fetchItems.map((fetchItem) => (
          <tr>
            {Object.entries(fetchItem).map(([key, value]) => {
              return (
                <td key={key} className="border border-black">
                  {JSON.stringify(value)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FetchTable;
