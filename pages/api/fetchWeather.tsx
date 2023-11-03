import axios from "axios";
import { WeatherData } from "../../types";

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey: string =
    process.env.WEATHER_API_KEY || "4a60e80bf7395ca666d7f695ba42cd8e"; // Ensure you have the API key set
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Use metric units for Celsius

  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log("Weather data:", data);
    console.log("Number of weather descriptions:", data.weather.length);
    // Map the API response to your WeatherData interface
    const weatherData: WeatherData = {
      cityName: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      highestTemp: Math.round(data.main.temp_max),
      lowestTemp: Math.round(data.main.temp_min),
      description: data.weather[0].description,
    };

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export default fetchWeather;
