import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import { useGetWeatherQuery } from './redux/services/weatherApi';
import { formatCurrentWeather } from './redux/services/WeatherService';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState({ city: 'berlin' });
  const [units, setUnits] = useState('metric');
  const {
    data: currentData,
    isLoading: currentLoading,
    error: currentError,
  } = useGetWeatherQuery({
    city: query.city,
    units: units,
  });

  if (currentLoading && !currentData) return <div>loading current weather</div>;

  const formattedWeatherData = formatCurrentWeather(currentData);

  const { lat, lon } = formattedWeatherData;

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 rounded-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <TopButtons setQuery={setQuery} />
      <Inputs setUnits={setUnits} setQuery={setQuery} units={units} />
      <TimeAndLocation weather={formattedWeatherData} />
      <TemperatureAndDetails weather={formattedWeatherData} />
      <Forecast units={units} lat={lat} lon={lon} />
    </div>
  );
}

export default App;
