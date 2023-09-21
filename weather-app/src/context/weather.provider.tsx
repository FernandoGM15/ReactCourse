import axios from "axios";
import { ChangeEvent, ReactNode, createContext, useState } from "react";

type WeatherProviderPops = {
  children: ReactNode | ReactNode[];
};

type WeatherContextProps = {
  search: Search;
  searchWeather: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  getWeather: (search: Search) => void;
  weather: Weather;
  loading: boolean;
};

type Search = {
  city: string;
  country: string;
};

const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);

type GeoPosition = {
  lat: number;
  lon: number;
};

type Weather = {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
};

export const WeatherProvider = ({ children }: WeatherProviderPops) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [loading, setLoading] = useState(false);

  const searchWeather = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const getWeather = async (search: Search) => {
    try {
      setLoading(true);
      const { city, country } = search;
      const appId = import.meta.env.VITE_API_KEY;
      const url = encodeURI(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
      );
      const { data } = await axios<GeoPosition[]>(url);
      const { lat, lon } = data[0];

      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
      const { data: weather } = await axios<Weather>(urlWeather);
      setWeather(weather);
    } catch (error) {
      alert("There was an error fetching the city weather");
    } finally{
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchWeather,
        getWeather,
        weather,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContext;
