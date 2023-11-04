import React, { FC } from "react";
import styles from "../styles/WeatherDisplay.module.css";
import { WeatherDisplayProps } from "../types";
import Image from "next/image";

const WeatherDisplay: FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
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
          src={weatherData.logo}
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
