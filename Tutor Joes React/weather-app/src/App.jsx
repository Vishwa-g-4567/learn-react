import React, { useEffect, useState } from "react";
import clearIcon from "./assets/clear-sky.png";
import cloudyIcon from "./assets/cloudy.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/heavy-rain.png";
import humidityIcon from "./assets/humidity.png";
import searchIcon from "./assets/search.png";
import snowIcon from "./assets/snowy.png";
import windIcon from "./assets/wind.png";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  lon,
  humidity,
  wind,
}) => {
  return (
    <>
      <img src={icon} alt={icon} className="size-40 object-contain w-full" />
      <div className="mt-2.5 text-4xl text-[#333] uppercase text-center font-medium">
        {temp}°C
      </div>
      <div className="mt-2.5 text-5xl text-[#ffbc00] uppercase text-center font-normal">
        {city}
      </div>
      <div className="mt-2.5 text-lg text-[#888] uppercase text-center font-medium">
        {country}
      </div>
      <div className="flex justify-center items-center gap-2.5 text-center">
        <div className="flex flex-col justify-center items-center p-2.5">
          <span className="text-sm font-medium">Latitude</span>
          <span className="text-lg font-bold text-[#666] pt-1">{lat}</span>
        </div>
        <div className="flex flex-col justify-center items-center p-2.5">
          <span className="text-sm font-medium">Longitude</span>
          <span className="text-lg font-bold text-[#666] pt-1">{lon}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <img
            src={humidityIcon}
            alt={humidityIcon}
            className="size-[50px] object-contain"
          />
          <div>
            <div className="text-lg font-bold text-[#666] pt-1">
              {humidity} %
            </div>
            <div className="text-xs text-[#888] font-medium">Humidity</div>
          </div>
        </div>
        <div className="text-center">
          <img
            src={windIcon}
            alt={windIcon}
            className="size-[50px] object-contain w-full"
          />
          <div>
            <div className="text-lg font-bold text-[#666] pt-1">
              {wind} km/h
            </div>
            <div className="text-xs text-[#888] font-medium">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudyIcon,
    "02n": cloudyIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };
  let API_KEY = "1b22107d8cd2e68689754975bbc07a11";
  const search = async () => {
    setLoading(true);
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=Metric`;
    try {
      let res = await fetch(URL);
      let data = await res.json();
      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCityNotFound(false);
    } catch (error) {
      console.error("An error occurred : ", error.message);
      setError("An error occurred while fetching weather data.");
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <div className="w-[350px] p-5 bg-white rounded-lg shadow shadow-[rgba(0,0,0,0.1)]">
        <div className="flex w-full mb-6 items-center border-2 border-[#70e6f3] rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-1 h-[40px] p-2.5 border-none outline-none"
            placeholder="Search City"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="p-2.5 h-[35px] cursor-pointer">
            <img
              src={searchIcon}
              className="object-contain size-4"
              alt="search-icon"
              onClick={() => search()}
            />
          </div>
        </div>
        {loading && (
          <div className="mt-2.5 text-[#888] text-2xl text-center">
            Loading..
          </div>
        )}
        {error && (
          <div className="mt-2.5 text-[#888] text-2xl text-center">{error}</div>
        )}
        {cityNotFound && (
          <div className="mt-2.5 text-[#888] text-2xl text-center">
            City not found
          </div>
        )}
        {!loading && !cityNotFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            lon={lon}
            humidity={humidity}
            wind={wind}
          />
        )}
      </div>
    </>
  );
};

export default App;
