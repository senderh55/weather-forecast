import React, { FC } from "react";
import styles from "../styles/WeatherDisplay.module.css";
import { WeatherDisplayProps } from "../types";
import Image from "next/image";
import {
  angled_rain,
  cloud_mid_rain,
  fast_wind,
  sun_mid_rain,
  tornado,
} from "../assets/images";

const getRandomLogo = () => {
  const images = [
    angled_rain,
    cloud_mid_rain,
    fast_wind,
    sun_mid_rain,
    tornado,
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return randomImage;
};

const WeatherDisplay: FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    console.log("No weather data");
    return null;
  }
  // Use the weatherData prop instead of DUMMY_WEATHER_DATA
  return (
    <div className={styles.weatherDisplay}>
      <div className={styles.leftSide}>
        <div className={styles.temperature}>{weatherData.temperature}°</div>
        <div className={styles.details}>
          <div className={styles.smallPrint}>
            H: {weatherData.highestTemp}° L: {weatherData.lowestTemp}°
          </div>
          <div className={styles.cityName}>
            {weatherData.cityName}, {weatherData.country}
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image
          src={getRandomLogo()}
          alt="Weather Logo"
          width={100}
          height={100}
          className={styles.logoImage}
        />
        <div className={styles.description}>{weatherData.description}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
