import axios from "axios";
import { WeatherData } from "../../types";

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey: string =
    process.env.WEATHER_API_KEY || "4a60e80bf7395ca666d7f695ba42cd8e";
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(url, apiKey);
  const response = await axios.get<WeatherData>(url);
  return response.data;
};

export default fetchWeather;
