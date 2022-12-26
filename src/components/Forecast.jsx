import { useGetDayWeatherQuery } from '../redux/services/weatherApi';
import { formatForecastWeather } from '../redux/services/WeatherService';
import { v4 as uuidv4 } from 'uuid';

function Forecast({ lat, lon, units }) {
  const {
    data: forecastData,
    isLoading: forecastLoading,
    error: forecastError,
  } = useGetDayWeatherQuery({
    lat: lat,
    lon: lon,
    excluded: 'current,minutely,alerts',
    units: units,
  });

  if (forecastLoading && !forecastData) return <div>loading forecast</div>;

  const formattedForecastData = formatForecastWeather(forecastData);

  const { daily, hourly } = formattedForecastData;

  if (formattedForecastData) {
    return (
      <>
        <div className="flex items-center justify-start mt-6">
          <p className="text-white font-medium uppercase">Hourly Forecast</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          {hourly.map((e) => (
            <div
              key={uuidv4()}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-light text-sm">{e.title}</p>
              <img
                className="w-12 my-1"
                src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`}
                alt=""
              />
              <p className="font-medium">{e.temp.toFixed()}°</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start mt-6">
          <p className="text-white font-medium uppercase">Daily Forecast</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          {daily.map((e) => (
            <div
              key={uuidv4()}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-light text-sm">{e.title}</p>
              <img
                className="w-12 my-1"
                src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`}
                alt=""
              />
              <div className="flex justify-between">
                <p className="font-medium mr-1">{e.dayTemp.toFixed()}°</p>/
                <p className="font-medium ml-1">{e.nightTemp.toFixed()}°</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Forecast;
