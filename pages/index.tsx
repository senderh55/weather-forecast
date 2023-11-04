// Home.tsx
import React, { useState, useEffect, FC } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import fetchWeather from "./api/fetchWeather";
import { WeatherData } from "../types";
import styles from "../styles/home.module.css";

const Home: FC = () => {
  const [weatherHistory, setWeatherHistory] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const defaultCities = ["London", "New York", "Tokyo"];
    const fetchDefaultCitiesWeather = async () => {
      try {
        const weatherPromises = defaultCities.map((city) => fetchWeather(city));
        const weatherDataArray = await Promise.all(weatherPromises);
        setWeatherHistory(weatherDataArray);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    fetchDefaultCitiesWeather();
  }, []);

  const handleSearch = async (city: string) => {
    try {
      const weatherData = await fetchWeather(city);
      setWeatherHistory((prevHistory) =>
        [weatherData, ...prevHistory].slice(0, 3)
      );
      setError(null); // Clear any existing errors
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Set the error message to display
      }
    }
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {error && <div className={styles.error}>{error}</div>}
      {weatherHistory.length > 0 &&
        weatherHistory.map((data, index) => (
          <WeatherDisplay key={index} weatherData={data} />
        ))}
    </div>
  );
};

export default Home;
