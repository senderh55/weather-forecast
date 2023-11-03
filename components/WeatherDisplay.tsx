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

const DUMMY_WEATHER_DATA = {
  city: "London",
  country: "UK",
  description: "Sunny",
  temperature: 20,
  humidity: 80,
  windSpeed: 10,
  logo: sun_mid_rain,
};

const WeatherDisplay: FC<WeatherDisplayProps> = ({ weatherData }) => {
  return (
    <div className={styles.weatherDisplay}>
      <div className={styles.leftSide}>
        <div className={styles.temperature}>
          {DUMMY_WEATHER_DATA.temperature}°
        </div>
        <div className={styles.details}>
          <div className={styles.smallPrint}>
            H: {DUMMY_WEATHER_DATA.humidity}° L: {DUMMY_WEATHER_DATA.windSpeed}°
          </div>
          <div className={styles.cityName}>
            {DUMMY_WEATHER_DATA.city}, {DUMMY_WEATHER_DATA.country}
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image
          src={DUMMY_WEATHER_DATA.logo}
          alt="Weather Logo"
          className={styles.logoImage}
        />
        <div className={styles.description}>
          {DUMMY_WEATHER_DATA.description}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
