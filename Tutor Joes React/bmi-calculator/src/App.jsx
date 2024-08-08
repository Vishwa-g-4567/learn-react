import React, { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setweight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage(
        "Please enter valid numeric values for height and weight"
      );
    }
  };
  const clearAll = () => {
    setHeight("");
    setweight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  };
  return (
    <>
      <div className="w-[800px] min-h-[400px] p-5 bg-white rounded-lg shadow shadow-black flex">
        <div className="w-[350px] bg-[url('./assets/bmi.png')] bg-no-repeat bg-center bg-contain"></div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-medium mb-2.5 py-2.5 uppercase text-[#2980b9]">
            BMI Calculator
          </h1>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-2.5">{errorMessage}</p>
          )}
          <div className="mb-4">
            <label className="block mb-2.5 text-[#888]" htmlFor="height">
              Height (cm)
            </label>
            <input
              type="text"
              id="height"
              className="w-full p-2.5 border border-[#ccc] mb-2.5 rounded"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2.5 text-[#888]" htmlFor="weight">
              Weight (cm)
            </label>
            <input
              type="text"
              id="weight"
              className="w-full p-2.5 border border-[#ccc] mb-2.5 rounded"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-[#3498db] text-white border-none rounded px-5 py-2.5 transition-colors duration-[0.3s] hover:bg-[#2980b9]"
            onClick={calculateBmi}
          >
            Calculate BMI
          </button>
          <button
            type="button"
            className="bg-red-500 text-white border-none rounded ml-2.5 px-5 py-2.5 transition-colors duration-[0.3s] hover:bg-red-600"
            onClick={clearAll}
          >
            Clear
          </button>
          {bmi != null && (
            <div className="mt-7 p-2.5 border border-[#3498db] rounded">
              <p className="my-1 text-[#3498db] font-semibold">
                Your BMI is : {bmi}
              </p>
              <p className="my-1 text-[#555]">Status : {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
