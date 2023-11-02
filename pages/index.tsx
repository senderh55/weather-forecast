import React, { useState, FC } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import fetchWeather from "./api/fetchWeather";
import { WeatherData } from "../types";
import styles from "../styles/home.module.css";

const Home: FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const weatherData = await fetchWeather(city);
      if (!weatherData) {
        return;
      }
      console.log(weatherData);
      setData(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={data} />
      <WeatherDisplay weatherData={data} />
      <WeatherDisplay weatherData={data} />
    </div>
  );
};

export default Home;
