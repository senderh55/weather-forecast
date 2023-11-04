// fetchWeather.ts
import axios from "axios";
import { WeatherData } from "../../types";
import {
  angled_rain,
  cloud_mid_rain,
  fast_wind,
  sun_mid_rain,
  tornado,
} from "../../assets/images";

import { StaticImageData } from "next/image";

const getRandomLogo = (): StaticImageData => {
  const images: StaticImageData[] = [
    angled_rain,
    cloud_mid_rain,
    fast_wind,
    sun_mid_rain,
    tornado,
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return randomImage;
};
const fetchWeather = async (city: string): Promise<WeatherData> => {
  if (!city.trim()) {
    throw new Error("City name cannot be empty.");
  }

  const apiKey: string =
    process.env.NEXT_PUBLIC_WEATHER_API_KEY ??
    "4a60e80bf7395ca666d7f695ba42cd8e";
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    const weatherData: WeatherData = {
      cityName: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      highestTemp: Math.round(data.main.temp_max),
      lowestTemp: Math.round(data.main.temp_min),
      description: data.weather[0].description,
      logo: getRandomLogo(),
    };

    return weatherData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
          throw new Error("Input is empty or malformed.");
        case 404:
          throw new Error("Location not found.");
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error("An error occurred, Please try again later.");
      }
    } else {
      throw error; // Non-Axios error
    }
  }
};

export default fetchWeather;
