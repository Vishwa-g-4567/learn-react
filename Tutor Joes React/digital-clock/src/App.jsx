import React, { useEffect, useState } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className="w-1/3 bg-white p-5 rounded text-center shadow shadow-black/50">
        <h1 className="text-4xl font-semibold text-[orangered] mb-4">
          Digital Clock
        </h1>
        <div className="mb-4 text-3xl font-semibold">
          {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :{" "}
          {formatTimeWithLeadingZero(currentTime.getMinutes())} :{" "}
          {formatTimeWithLeadingZero(currentTime.getSeconds())}{" "}
          {currentTime.getHours() >= 12 ? "PM" : "AM"}
        </div>
        <div className="text-[#888] text-xl">{formatDate(currentTime)}</div>
      </div>
    </>
  );
};

export default App;
