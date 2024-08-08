import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(URL);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate : ", error);
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);
  useEffect(() => {
    if (exchangeRate != null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);
  return (
    <>
      <div className="w-1/3 h- bg-white rounded-lg px-5 py-2.5">
        <div className="w-full h-[200px] mb-2.5 bg-[url('./assets/currency.png')] bg-[length:50%] bg-no-repeat bg-center"></div>
        <div>
          <h1 className="text-2xl font-semibold uppercase py-2.5 mb-2.5 text-[#3498db] text-center border-y-2 border-dashed border-[#ccc]">
            Currency Converter
          </h1>
          <div className="mb-4">
            <label
              className="block mb-2.5 text-[#888] font-medium"
              htmlFor="amt"
            >
              Amount
            </label>
            <input
              type="number"
              id="amt"
              className="w-full p-2.5 border border-[#ccc] rounded text-lg outline-none focus:border-[#3498db]"
              value={amount}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setAmount(isNaN(value) ? 0 : value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2.5 text-[#888] font-medium"
              htmlFor="fromCurrency"
            >
              From Currency
            </label>
            <select
              id="fromCurrency"
              className="w-full p-2.5 border border-[#ccc] rounded text-lg outline-none focus:border-[#3498db]"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuvan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2.5 text-[#888] font-medium"
              htmlFor="toCurrency"
            >
              To Currency
            </label>
            <select
              id="toCurrency"
              className="w-full p-2.5 border border-[#ccc] rounded text-lg outline-none focus:border-[#3498db]"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuvan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="mt-5 p-2.5 border-2 border-dotted border-[#3498db] rounded">
            <p className="my-2.5 text-[#3498db] font-semibold text-center">
              {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
