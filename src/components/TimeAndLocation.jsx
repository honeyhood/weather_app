import { formatToLocalTime } from '../redux/services/WeatherService';

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <h1 className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </h1>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {name}, {country}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
