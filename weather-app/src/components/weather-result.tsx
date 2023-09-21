import useWeather from "../hooks/useWeather";
import Spinner from "./spinner";

const WeatherResult = () => {
  const { weather, loading } = useWeather();
  const { main, name } = weather;

  if (loading) return <Spinner />;
  
  if (!main) return;

  return (
    <div className="contenedor clima">
      <h2>{name}</h2>
      <p>
        {main.temp} <span>°C</span>
      </p>
      <div className="temp_min_max">
        <p>
          Min: {main.temp_min} <span>°C</span>
        </p>
        <p>
          Max: {main.temp_max} <span>°C</span>
        </p>
      </div>
    </div>
  );
};
export default WeatherResult;
