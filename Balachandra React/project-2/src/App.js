import { useEffect, useState } from "react";
import FetchControl from "./FetchControl";
import FetchInfo from "./FetchInfo";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("users");

  const [fetchItems, setFetchItems] = useState([]);

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Data not received");
        const data = await response.json();
        setFetchItems(data);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  }, [reqType]);

  return (
    <div className="container mx-auto max-w-4xl">
      <FetchControl
        reqType={reqType}
        setReqType={setReqType}
        setIsLoading={setIsLoading}
      />
      <FetchInfo
        fetchItems={fetchItems}
        fetchError={fetchError}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
