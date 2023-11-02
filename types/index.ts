export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  name: string;
  weather: Weather[];
  main: {
    temp: number;
  };
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
}

export interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}
