import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const App = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
      );
    }
    return daysArray;
  };
  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  return (
    <>
      <div className="w-[400px] bg-white p-1 shadow shadow-black/50">
        <div className="flex justify-between items-center bg-[#3498db] text-white p-2.5">
          <button
            className="text-xl"
            onClick={() => {
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                  1
                )
              );
            }}
          >
            <BsArrowLeftCircleFill />
          </button>
          <select
            className="text-lg px-1 border border-[#3498db] text-black rounded mx-2.5"
            value={selectedDate.getMonth()}
            onChange={(e) => {
              const newMonth = parseInt(e.target.value, 10);
              setSelectedDate(
                new Date(selectedDate.getFullYear(), newMonth, 1)
              );
            }}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            className="text-lg px-1 border border-[#3498db] text-black rounded mx-2.5"
            value={selectedDate.getFullYear()}
            onChange={(e) => {
              const newYear = parseInt(e.target.value, 10);
              setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
            }}
          >
            {Array.from(
              { length: 10 },
              (_, i) => selectedDate.getFullYear() - 5 + i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button
            className="text-xl"
            onClick={() => {
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  1
                )
              );
            }}
          >
            <BsArrowRightCircleFill />
          </button>
        </div>
        <div className="grid grid-cols-7 text-center font-semibold p-2.5 bg-[#3498db] text-white mb-2.5">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {daysInMonth().map((day, index) => (
            <div
              key={index}
              className={`${
                day
                  ? isSameDay(day, new Date())
                    ? "bg-[tomato] p-2.5 text-center text-white cursor-pointer"
                    : "p-2.5 text-center border border-[#ccc] cursor-pointer hover:bg-[#3498db] hover:text-white"
                  : "p-2.5 text-center border border-[#ccc] bg-[#f9f9f9]"
              }`}
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
