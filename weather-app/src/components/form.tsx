import { FormEvent, useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = () => {
  const [alert, setAlert] = useState("");

  const { search, searchWeather, getWeather } = useWeather();
  const { city, country } = search;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("All fields are required");
      return;
    }
    getWeather(search);
  };

  return (
    <div className="contenedor">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchWeather}
            value={city}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={searchWeather}
            value={country}
          >
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Spain</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <button type="submit">Get weather</button>
      </form>
    </div>
  );
};
export default Form;
