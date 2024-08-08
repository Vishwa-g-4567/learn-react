import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const DataContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <DataContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header cart={cart} />
          <div className="p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
