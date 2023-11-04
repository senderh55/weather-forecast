import { StaticImageData } from "next/image";

export interface WeatherData {
  cityName: string;
  country: string;
  temperature: number;
  highestTemp: number;
  lowestTemp: number;
  description: string;
  logo: StaticImageData;
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
}

export interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}
