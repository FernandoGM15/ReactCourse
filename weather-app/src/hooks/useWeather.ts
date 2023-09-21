import { useContext } from "react";
import WeatherContext from "../context/weather.provider";

const useWeather = () => {
  return useContext(WeatherContext);
};
export default useWeather;
