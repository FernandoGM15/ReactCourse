import Form from "./components/form";
import WeatherResult from "./components/weather-result";
import { WeatherProvider } from "./context/weather.provider";

function App() {
  return (
    <WeatherProvider>
      <header>
        <h1>Weather search</h1>
      </header>
      <main className="dos-columnas">
        <Form />
        <WeatherResult />
      </main>
    </WeatherProvider>
  );
}

export default App;
