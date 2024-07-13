import React, { useEffect, useState } from "react";
import api from "../api/api";
import Loading from "./Loading";
import FetchError from "./FetchError";

const Main = () => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await api.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
        );
        setItems(response.data.meals);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchMeal())();
    }, 2000);
  }, []);

  return (
    <>
      {(isLoading && <Loading />) ||
        (fetchError && <FetchError fetchError={fetchError} />) || (
          <div className="flex flex-wrap justify-around m-2.5">
            {items.map(({ strMeal, strMealThumb, idMeal }) => (
              <section
                key={idMeal}
                className="bg-[rgb(255,249,249)] text-xs text-[rgb(68,68,68)] m-2.5 p-8 cursor-pointer transition-all hover:scale-95"
              >
                <img
                  className="rounded-md"
                  height="300px"
                  width="300px"
                  src={strMealThumb}
                  alt={strMeal}
                />
                <div className="flex justify-between mt-5">
                  <p className="font-bold">{strMeal}</p>
                  <p className="font-bold">#{idMeal}</p>
                </div>
              </section>
            ))}
          </div>
        )}
    </>
  );
};

export default Main;
